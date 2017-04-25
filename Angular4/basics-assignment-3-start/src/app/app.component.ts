import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph=false;
  buttonClicked=[];

  getColor(item) {
    return item>4 ? 'blue' : 'green';
  }
  toggleParagraph() {
    var lastnumber=this.buttonClicked.length
//    this.buttonClicked.push(lastnumber);
    this.showParagraph=!this.showParagraph;
    this.buttonClicked.push(new Date());
  }
}
