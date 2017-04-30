import { Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None or Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { 
    console.log('Constructor Called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('On Changes Called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('Init Called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }
  
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }
  
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
