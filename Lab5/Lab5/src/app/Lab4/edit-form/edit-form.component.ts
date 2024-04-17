import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../../Services/students.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [StudentsService],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',
})
export class EditFormComponent {
  idValid: boolean = true;
  nameValid: boolean = true;
  ageValid: boolean = true;
  emailValid: boolean = true;
  addressValid: boolean = true;
  // student: any;

  constructor(
    private StudentService: StudentsService,
    private myRoute: ActivatedRoute,
    private router: Router
  ) {}

  student: any = this.StudentService.getStudentById(
    this.myRoute.snapshot.params['id']
  ).subscribe(
    (data) => {
      this.student = data;
    },
    (error) => {
      console.log(error);
    }
  );

  //Form and Inputs
  myForm = new FormGroup({
    id: new FormControl(),
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
        id: this.student.id,
        name: this.myForm.controls['name'].value,
        age: this.myForm.controls['age'].value,
        email: this.myForm.controls['email'].value,
        address: this.myForm.controls['address'].value,
      };
      this.StudentService.updateStudent(this.student).subscribe(
        (data) => {
          console.log('Student added successfully', data);
          console.log(this.myRoute.snapshot.params['id']);
          this.router.navigate([
            `/students/${this.myRoute.snapshot.params['id']}`,
          ]);
        },
        (error) => {
          console.log('Error adding student:', error);
          console.log(this.myForm.controls['id'].value);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
