import { Routes } from '@angular/router';
import { HomeComponent } from './Lab4/home/home.component';
import { StudentsComponent } from './Lab4/students/students.component';
import { ErrorComponent } from './Lab4/error/error.component';
import { ProfileComponent } from './Lab4/profile/profile.component';
import { StudentDetailsComponent } from './Lab4/student-details/student-details.component';
import { AddFormComponent } from './Lab4/add-form/add-form.component';
import { EditFormComponent } from './Lab4/edit-form/edit-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students/addnew', component: AddFormComponent },
  { path: 'students/:id/editstudent', component: EditFormComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorComponent },
];
