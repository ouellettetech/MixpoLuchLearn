import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statusOptions= ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit(){
        this.projectForm = new FormGroup({
          'projectName':new FormControl(null, [Validators.required], this.forbiddenProjectsAsync),
          'email': new FormControl(null, [Validators.required,Validators.email]),
          'status': new FormControl('Stable')
    });
  }
  onSubmit() {
    console.log(this.projectForm);
  }

  forbiddenProjects(control: FormControl): {[s: string]: boolean}{
    if(control.value === 'Test') {
            return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenProjectsAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test') {
            resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
