import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { CurrentUser } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  user!: CurrentUser | null
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
