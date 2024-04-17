import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private API_URL = 'http://localhost:3000/students';

  constructor(private myClient: HttpClient) {}

  getStudents() {
    return this.myClient.get(this.API_URL);
  }

  getStudentById(id: number) {
    return this.myClient.get(`${this.API_URL}/${id}`);
  }

  addStudent(student: any) {
    return this.myClient.post(this.API_URL, student);
  }

  updateStudent(student: any) {
    return this.myClient.put(`${this.API_URL}/${student.id}`, student);
  }

  deleteStudent(id: number) {
    return this.myClient.delete(`${this.API_URL}/${id}`);
  }
}
