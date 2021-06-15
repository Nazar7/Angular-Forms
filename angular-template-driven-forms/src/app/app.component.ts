import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Login} from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';
  email = '';
  password= '';
  userLogin = new Login('', '');

  onSubmit(){
  console.log("Submit ok")
}

}






