import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})

// implementing this interface is not mendatory but it is good practice to implement it.
export class DemoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  title: string = 'Demo Component';
  @Input() message?: string;

  @ViewChild('temp') tempPara?: ElementRef;
  @ContentChild('temp') paraContent?: ElementRef;

  constructor() {
    console.log('demo constructor called');
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Hook called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit Hook called');
    // console.log('In ngOnInit', this.tempPara?.nativeElement);
  }

  ngDoCheck() {
    console.log('ngDoCheck Hook called');
    // console.log('In ngDoCheck', this.paraContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Hook called');
    // console.log('In ngAfterContentInit ', this.paraContent?.nativeElement);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentCheck Hook called');
    // console.log('In ngAfterContentChecked ', this.paraContent?.nativeElement);
    console.log('Temp para ', this.tempPara);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Hook called');
    console.log('Temp para  ', this.tempPara);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewInit Hook called');
    console.log(this.tempPara?.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Hook called');
  }
}
