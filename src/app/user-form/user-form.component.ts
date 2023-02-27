import {Component} from '@angular/core';
import {User} from "../user";
// @ts-ignore
import {v4 as uuid} from 'uuid';
import {UsersService} from "../users.service";

let myuuid = uuid();

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  constructor(public restApi: UsersService) {
  }
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  preview: string = "";

  model = new User(myuuid, 'John Doe', 'Whiterun', new Date(Date()), 'Just a random dude', 'Male', 'SuperSecret');
  submitted = false;

  onSubmit() {
    this.restApi.addUser(this.model);
    this.submitted = true
  }

  selectFiles(event: any): void {
    this.preview = "";
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;
    if (this.selectedFiles && this.selectedFiles[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.preview = e.target.result;
      }
      reader.readAsDataURL(this.selectedFiles[0]);
      this.selectedFileNames[0] = this.selectedFiles[0].name;
    }
  }
}
