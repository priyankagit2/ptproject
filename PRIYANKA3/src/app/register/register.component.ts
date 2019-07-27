import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name;
  password;
  constructor(private us:UsersService) { }

  ngOnInit() {
  }

 signIn()
 {
   this.us.signIn(this.name,this.password);
 }
}
