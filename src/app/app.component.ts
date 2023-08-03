import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  signupForm: FormGroup ;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username' : new FormControl(null),
      'email' : new FormControl(null),
      'gender' : new FormControl('female')
    });
  }

  onSubmit(){
    console.log('my form', this.signupForm);
  }
}
