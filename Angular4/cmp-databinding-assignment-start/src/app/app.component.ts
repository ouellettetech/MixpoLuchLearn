import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  onGameTrigger(gameData: {curNum: number}) {
    console.log('Event Value:' + gameData.curNum);
    if(gameData.curNum % 2) {
      this.oddNumbers.push(gameData.curNum);
    } else {
      this.evenNumbers.push(gameData.curNum);
    }
  }
}
