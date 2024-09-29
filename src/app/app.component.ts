import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-lifecycle-hook';
  inputVal: string = '';

  constructor() {
    console.log('Constructor called');
  }

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }
}
