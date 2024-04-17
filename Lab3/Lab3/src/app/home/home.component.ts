import { Component } from '@angular/core';
import { RegisterationComponent } from '../registeration/registeration.component';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterationComponent, StudentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  students: {}[] = [];

  getData(e: any) {
    if (e.name.length < 3 || e.age < 25 || e.age > 30) {
      return;
    }
    this.students.push(e);
  }
}
