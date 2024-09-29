import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent implements OnChanges {
  title: string = 'Demo Component';
  @Input() message?: string;

  constructor() {
    console.log('demo constructor called');
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Hook called');
    console.log(changes);
  }
}
