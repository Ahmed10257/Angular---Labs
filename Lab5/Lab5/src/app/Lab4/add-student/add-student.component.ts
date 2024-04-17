import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
  constructor(private router: Router) {}

  handleClick() {
    this.router.navigate(['/students/addnew']);
  }
}
