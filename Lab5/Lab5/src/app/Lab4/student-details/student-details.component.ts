import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { StudentsService } from '../../../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule, EditFormComponent],
  providers: [StudentsService],
  templateUrl: './student-details.component.html',
  styles: ``,
})
export class StudentDetailsComponent implements OnInit {
  ID = 0;
  student: any;

  constructor(
    private router: Router,
    myRoute: ActivatedRoute,
    private studentsService: StudentsService
  ) {
    this.ID = myRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.studentsService.getStudentById(this.ID).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editStudent() {
    this.router.navigate([`/students/${this.ID}/editstudent`]);
  }

  // editStudent() {
  //   this.studentsService.updateStudent(this.student).subscribe(
  //     (data) => {
  //       console.log('Student edited successfully.');
  //     },
  //     (error) => {
  //       console.log('Error editing student:', error);
  //     }
  //   );
  // }

  deleteStudent() {
    if (this.student) {
      this.studentsService.deleteStudent(this.student.id).subscribe(
        () => {
          // Handle successful deletion
          console.log('Student deleted successfully.');
          // Optionally, you might want to clear the student data after deletion
          this.student = null;
          this.router.navigate(['/students']);
        },
        (error) => {
          console.log('Error deleting student:', error);
        }
      );
    }
  }
}
