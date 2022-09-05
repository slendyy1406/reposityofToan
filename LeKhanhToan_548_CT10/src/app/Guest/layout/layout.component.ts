import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { CurrentUser } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user!: CurrentUser | null
  isCartOpen = false;
  isShowOpen = false;
  usertoggle = false;

  constructor(private readonly us: UserService) {}

  ngOnInit(): void {
    this.us.user$.subscribe((user) => this.user = user)
  }

  public handleSignOut () {
    this.us.signOut()
  }
}
