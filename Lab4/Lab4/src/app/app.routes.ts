import { Routes } from '@angular/router';
import { HomeComponent } from './Lab4/home/home.component';
import { StudentsComponent } from './Lab4/students/students.component';
import { ErrorComponent } from './Lab4/error/error.component';
import { ProfileComponent } from './Lab4/profile/profile.component';
import { StudentDetailsComponent } from './Lab4/student-details/student-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorComponent },
];
