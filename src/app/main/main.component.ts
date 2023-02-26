import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../user";
// @ts-ignore
import {v4 as uuid} from 'uuid';
import {map} from "rxjs";

let myuuid = uuid();

@Component({
  selector: 'app-main', templateUrl: './main.component.html', styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  currentUser: string = "1a5990c9-a775-11ed-89fd-c9e316c18866";
  user: User | undefined;

  constructor(public restApi: UsersService) {
  }

  ngOnInit(): void {
    this.getUser()
    console.log(this.user);
  }

  dislike() {
    this.getUser()
  }

  like() {
    this.restApi.setLike(this.currentUser, this.user!.id);
    this.getUser()
  }

  getUser(){
    this.restApi.getRandomUser().pipe(map(data => {
      this.user = new User(data['id'], data['username'], data['location'], data['birthday'], data['description'], data['gender'], data['password'], data['photo']);
    })).subscribe(data => console.log('data: ', data));
  }
}

