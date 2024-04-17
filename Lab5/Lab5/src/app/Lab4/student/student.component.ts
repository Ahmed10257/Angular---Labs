import { Component, Input } from '@angular/core';
import { StudentsService } from '../../../../Services/students.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
  providers: [StudentsService],
})
export class StudentComponent {
  @Input() student: any;
}
