import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  nameValid: boolean = true;
  ageValid: boolean = true;
  emailValid: boolean = true;

  //Form and Inputs
  myForm = new FormGroup({
    name: new FormControl('Name', [
      Validators.required,
      Validators.minLength(3),
    ]),
    age: new FormControl(0, [
      Validators.required,
      Validators.min(20),
      Validators.max(40),
    ]),
    email: new FormControl('Email', [Validators.required, Validators.email]),
  });

  // Getters
  // get nameValid() {
  //   return this.myForm.controls['name'].valid;
  // }

  // get ageValid() {
  //   return this.myForm.controls['age'].valid;
  // }

  // get emailValid() {
  //   return this.myForm.controls['email'].valid;
  // }
  //Methods
  submit() {
    this.nameValid = this.myForm.controls['name'].valid;
    this.ageValid = this.myForm.controls['age'].valid;
    this.emailValid = this.myForm.controls['email'].valid;
  }
}
