import { Component } from '@angular/core';
import {User} from "../user";
// @ts-ignore
import {v4 as uuid} from 'uuid';

let myuuid = uuid();

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  preview: string = "";

  model = new User(myuuid, 'John Doe', [10,20] , 'Whiterun', new Date(Date()), 'Just a random dude' ,'Male', 'SuperSecret');
  submitted = false;
  onSubmit(){ this.submitted = true}

  selectFiles(event: any): void {
    this.preview = "";
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;
    if (this.selectedFiles && this.selectedFiles[0]){
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
