import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { purchases } from 'src/app/shared/types/purchases.interface';

@Component({
  selector: 'app-qlydonhang',
  templateUrl: './qlydonhang.component.html',
  styleUrls: ['./qlydonhang.component.css']
})
export class QlydonhangComponent implements OnInit {
  purcs: purchases[] = [];
  constructor(private readonly afs:AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection<purchases>('purchases').get().subscribe((snapshot)=> {
      this.purcs = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}) as purchases)
    })
}
}
