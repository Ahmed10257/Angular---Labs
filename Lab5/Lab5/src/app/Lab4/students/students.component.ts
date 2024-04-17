import { Component } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { StudentsService } from '../../../../Services/students.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [StudentComponent, RouterModule, RouterOutlet, HttpClientModule],
  providers: [StudentsService],
  templateUrl: './students.component.html',
  styles: ``,
})
export class StudentsComponent {
  constructor(private studentService: StudentsService) {}
  students: any;
  ngOnInit() {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
        console.log(this.students);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
