import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') signupForm: NgForm;
    defaultType = 'pro';
    submitted = false;

    user = {
      email : '',
      type : '',
      password : ''
    };

    onSubmit() {
      console.log(this.signupForm);
      this.submitted = true;
      this.user.email = this.signupForm.value.email;
      this.user.type = this.signupForm.value.type;
      this.user.password = this.signupForm.value.password;

      this.signupForm.reset();
  }
}
