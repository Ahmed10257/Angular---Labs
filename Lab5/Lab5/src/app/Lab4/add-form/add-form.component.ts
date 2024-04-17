import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StudentsService } from '../../../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
  providers: [StudentsService],
})
export class AddFormComponent {
  idValid: boolean = true;
  nameValid: boolean = true;
  ageValid: boolean = true;
  emailValid: boolean = true;
  addressValid: boolean = true;
  student: any;

  constructor(private StudentService: StudentsService) {}

  //Form and Inputs
  myForm = new FormGroup({
    id: new FormControl(0),
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
    address: new FormControl('Address'),
  });

  submit() {
    this.idValid = this.myForm.controls['id'].valid;
    this.nameValid = this.myForm.controls['name'].valid;
    this.ageValid = this.myForm.controls['age'].valid;
    this.emailValid = this.myForm.controls['email'].valid;
    this.addressValid = this.myForm.controls['address'].valid;

    if (
      this.idValid &&
      this.nameValid &&
      this.ageValid &&
      this.emailValid &&
      this.addressValid
    ) {
      this.student = {
        id: this.myForm.controls['id'].value,
        name: this.myForm.controls['name'].value,
        age: this.myForm.controls['age'].value,
        email: this.myForm.controls['email'].value,
        address: this.myForm.controls['address'].value,
      };
      this.StudentService.addStudent(this.student).subscribe(
        (data) => {
          console.log('Student added successfully');
        },
        (error) => {
          console.log('Error adding student:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
