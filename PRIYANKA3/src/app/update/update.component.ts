import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  arr;
  name;
  password;
  email;
  budget;
  people;
  date;
  constructor(private us: UsersService) { }
 
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.us.getData().subscribe(data => { this.arr = data; });
}
  addData() {
    this.us.addData(this.name,this.password,this.email,this.budget,this.people,this.date);
    // console.log(this.name)
}


up_data(name,password,id) {
  this.us.up_data(name,password,id);
 

}

delData(id) {
  this.us.delData(id);
}

}




