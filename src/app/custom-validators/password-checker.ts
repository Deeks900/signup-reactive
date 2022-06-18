import { FormGroup } from '@angular/forms';

// class based approach
// class PasswordChecker extends FormGroup
//We have an error object in angular
//Functional Approach
export function PasswordChecker(controlName: string, CompareControlName: string){
    //Always remeber to write FormGroup here because it will be used in FormBuilder
    // We are getting the control of the form here
    return (formGroup: FormGroup)=>{
        const password = formGroup.controls[controlName];
        const confPassword = formGroup.controls[CompareControlName];
        if(password.value !== confPassword.value){
            confPassword.setErrors({mustmatch: true})
        }
        else{
            confPassword.setErrors(null);
        }
    }
}