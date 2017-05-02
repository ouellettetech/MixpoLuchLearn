import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameEmiter = new EventEmitter<{curNum: number}>();
  curNum = 0;
  timer: number = null;
  constructor() { }

  ngOnInit() {
  }

  onStartTimer(){
    if ( !this.timer ) {
      const self = this;
      self.curNum = 0;
      this.timer = window.setInterval(function(){ 
        console.log('Current: ' + self.curNum );
        self.gameEmiter.emit({
          curNum: self.curNum });
        self.curNum = self.curNum + 1;
      }, 1000);
    }
  }
  
  onStopTimer(){
    if ( this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }
}
