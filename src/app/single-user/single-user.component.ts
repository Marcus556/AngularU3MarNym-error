import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service'

 
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
user: string;



  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
    ) { }

  ngOnInit() {
    this.user = this.route.snapshot.paramMap.get('user')
    this.usersService.showUser();
  }

}


