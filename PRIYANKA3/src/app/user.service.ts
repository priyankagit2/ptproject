import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({  
  providedIn: 'root'
})
export class UsersService {
 
  url = 'http://localhost:3000';
  constructor(private http: HttpClient, private router : Router) {}
  addData(name,password,email,budget,people,date) {
      const obj = {name,password,email,budget,people,date};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }
   
  getData() {
      return(
      this
          .http
          .get(`${this.url}/view`)
      );
  }
  upData(id, name) {
      const obj = { name };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
    console.log("delete function");
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
 
 
    up_data(name,password, id) {
 
      const obj = {
          name: name,
          password: password
       
         
        };
      this
        .http
        .put(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    signIn(name,password){
      const obj = {name, password};
      console.log(obj);
      this
        .http
        .post(`${this.url}/signin`,obj)
        .subscribe((res:any) => {
          if(res.message){
            alert(res.message);
          }
          else{

            this.router.navigateByUrl(`/about`);
          }
        });
    }
    getDataById(id){
      return this
        .http
        .get(`${this.url}/getbyid/${id}`);
    }
    
}