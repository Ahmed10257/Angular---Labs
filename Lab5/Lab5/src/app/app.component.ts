import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Lab4/header/header.component';
import { AddStudentComponent } from './Lab4/add-student/add-student.component';
import { EditFormComponent } from './Lab4/edit-form/edit-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    RouterModule,
    AddStudentComponent,
    EditFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lab5';
}
