import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  name;
  password;
  email;
  budget;
  people;
  date;
  
  constructor(private us: UsersService) { }
 
  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.password,this.email,this.budget,this.people,this.date);
    // console.log(this.name)
}

}
