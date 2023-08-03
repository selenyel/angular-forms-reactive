import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  signupForm: FormGroup ;
  forbiddenUsernames = ['Selen','Yel']

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),  
      }),
      'gender' : new FormControl('female'),
      'hobbies' : new FormArray([]),
    });


    // This is value changes. It controls every value change on key stroke 

    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    
    // This is status changes. It controls status of the form everytime form elements changes on key stroke 

    // this.signupForm.statusChanges.subscribe(
    //   (value) => console.log(value)
    // );

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

  forbiddenNames(control: FormControl) : {[s : string] : boolean}
  {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden' : true}
    }
    return null;
  }

  forbiddenEmails(control: FormControl) : Promise <any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com')
          resolve({'emailIsForbidden' : true});
        else
          resolve(null);  
      },1500);
    })
    return promise;
  }
}
