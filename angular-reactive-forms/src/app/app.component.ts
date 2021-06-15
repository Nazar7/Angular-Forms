import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
 form!: FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      userName: new FormControl('', [
        Validators.required, 
        Validators.minLength(5),
        Validators.maxLength(10)]),
        userPassword: new FormControl('', [MyValidators.checkVal,Validators.required]),
      userEmail: new FormArray([
      ]),
      
    });
    this.addEmail();
  }

  getControls(){
    return (<FormArray>this.form.controls.userEmail).controls;
  }

  getControlsPassword(){
    return (<FormGroup>this.form.controls.userPassword);
  }

  addEmail(){
    console.log(this.form.controls.userPassword)
    const emailGroup = new FormGroup({
      email: new FormControl(''),
    });
    (<FormArray>this.form.controls.userEmail).push(emailGroup)
  }

  removeItem(itemId: any){
    (<FormArray>this.form.controls.userEmail).removeAt(itemId)
  }

  getErrorMessage() {
    if ((<FormControl>this.form.controls.userPassword).hasError('required')) {
      return 'You must enter a value';
    }

    return null
  }


  get userFormGroups () {
    return this.form.get('userEmail') as FormArray
  }

  submit(){
    const formData = {...this.form.value}
  } 

}


