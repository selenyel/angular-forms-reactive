import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      'userData' : new FormGroup({
        'username' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),  
      }),
      'gender' : new FormControl('female'),
      'hobbies' : new FormArray([]),
    });
  }

  onSubmit(){
    console.log('my form', this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
