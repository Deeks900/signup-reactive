import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import {PasswordChecker} from "./custom-validators/password-checker"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'signup-reactive';
  registerForm!: FormGroup;
  submitted: boolean = false;

  // In constructor we have to pass this so that it can knows about forms
  constructor(private formbuilder: FormBuilder){}
  ngOnInit() {
    // formbuilder gives us many options
    // we are intialising all these fields 
    this.registerForm = this.formbuilder.group({
      firstName : ['', Validators.required, Validators.minLength(2)],
      lastName: ['', Validators.required],
      // If we need to write more than one validators then we need to wrap thoe inside square brackets
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      acceptTandC: [false, Validators.requiredTrue]
    }, {
      validators: PasswordChecker("password","confirmPassword")
    })
  }

  //We can also have ngOnDestroy 

  //For getting control of this form
  get h(){
    return this.registerForm.controls;
  }

 onSubmit(){
  this.submitted = true;
  if(this.registerForm.invalid){
    return;
  }

  console.table(this.registerForm.value);
  alert('Success Signup\n'+ JSON.stringify(this.registerForm.value));
 }

  onReset(){
    this.submitted = false;
    //It will clear out all the fields of the forms.
    this.registerForm.reset();
  }
}
