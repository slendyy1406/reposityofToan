import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, getAdditionalUserInfo, UserCredential} from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CurrentUser } from '../types/user.interface';
import { BehaviorSubject, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$ = new BehaviorSubject<CurrentUser | null>(null)

  constructor(private readonly afa: AngularFireAuth, private readonly afs: AngularFirestore, private readonly router: Router) {
    this.afa.authState
      .pipe(
        switchMap((user) => {
          if (!user) {
            this.user$.next(null)
            return of(null)
          }
          return this.afs.doc<CurrentUser>(`users/${user.uid}`).get()
        })
      )
      .subscribe((user) => {
        if (!user) {
          this.user$.next(null)
          this.router.navigate(['/guest'])
          return
        }
        this.user$.next(user.data()!)
        if (user?.data()?.role) {
          this.router.navigate(['/admin'])
        } else {
          
          this.router.navigate(['/guest'])
        }
      })
  }

  public signIn () {
    this.afa.signInWithPopup(new GoogleAuthProvider()).then(user => {
      if (!user.user) return
      if (user.additionalUserInfo?.isNewUser) {
        const newUser = {
          createdAt: user.user.metadata.creationTime || new Date(),
          displayName: user.user.displayName!,
          email: user.user.email,
          uid: user.user.uid,
          role: false,
          photoUrl: user.user.photoURL
        }
        this.afs.doc(`users/${newUser.uid}`).set(newUser)
      }
    })
  }

  public signOut() {
    this.afa.signOut()
  }
}
