import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  images_array = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    'https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80',
    'https://whc.unesco.org/uploads/thumbs/activity_725-2148-704-20220308132126.jpg',
  ];

  link = '';
  i = 0;
  intervalId: any;

  nextImage() {
    if (this.link === '') {
      this.link = this.images_array[0];
      this.i++;
    } else {
      if (this.i < this.images_array.length) {
        this.link = this.images_array[this.i];
        this.i++;
      } else {
        this.link = this.images_array[this.i - 1];
      }
    }
  }

  prevImage() {
    if (this.link === '') {
      this.link = this.images_array[0];
      this.i++;
    } else {
      if (this.i > 1) {
        this.i--;
        this.link = this.images_array[this.i - 1];
      } else {
        this.link = this.images_array[0];
      }
    }
  }

  slideImage() {
    this.intervalId = setInterval(() => {
      if (this.i < this.images_array.length - 1) {
        this.i++;
      } else {
        this.i = 0;
      }
      this.link = this.images_array[this.i];
    }, 500);
  }

  stopSlide() {
    clearInterval(this.intervalId);
  }
}
