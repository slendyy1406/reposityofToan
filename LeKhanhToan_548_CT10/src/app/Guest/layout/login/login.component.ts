import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() show!: boolean
  @Output() close = new EventEmitter()


  constructor(private readonly us: UserService) { }
  ngOnInit(): void {

  }

  handleSighIn() {
    this.us.signIn()
    this.close.emit()
  }
}
