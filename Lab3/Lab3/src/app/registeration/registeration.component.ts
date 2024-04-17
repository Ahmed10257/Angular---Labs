import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css',
})
export class RegisterationComponent {
  name: string = '';
  age: number = 0;
  DataToParent = {};

  @Output() inputEvent = new EventEmitter();

  sendData() {
    this.DataToParent = { name: this.name, age: this.age };
    this.inputEvent.emit(this.DataToParent);
  }
}
