import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  texts: string[] = ['Software Engineer', 'frontend_Angular', 'Mentor',];
  currentText: string = '';
  textIndex: number = 0;
  intervalId: any;
  vewmasseg = true
  ngOnInit(): void {
    this.currentText = this.texts[this.textIndex]; 
    this.startTextRotation(); 
  }
  startTextRotation() {
    this.intervalId = setInterval(() => {
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      this.currentText = this.texts[this.textIndex];
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
