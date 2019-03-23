import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { getDefaultService } from 'selenium-webdriver/opera';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl = 'http://my-json-server.typicode.com/Marcus556/AngularU3MarNym/users/';
  userSpecs: User;
  b: string;
  a: any;




  constructor(private http: HttpClient) { }
  getUser(){
    return this.http.get<User>(this.usersUrl);
  };
  showUser() {
    this.getUser()
    .subscribe((data: User) => this.userSpecs = { ...data});
    console.log(Object.keys(this.getUser()).length );
  }





}
