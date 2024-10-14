import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-lifecycle-hook';
  inputVal: string = '';
  toDestroy: boolean = false;

  constructor() {
    console.log('Constructor called');
  }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit Hook of Appcomponent called');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked Hook of Appcomponent called');
  // }

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }

  destroy() {
    this.toDestroy = !this.toDestroy;
  }
}
