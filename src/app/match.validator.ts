import { FormGroup, AbstractControl } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

export function MustNotMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustNotMatch) {
            return;
        }

        if (control.value == matchingControl.value) {
            matchingControl.setErrors({ mustNotMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

export function zipFormat (control: AbstractControl) { 
    let zip:any = control.value;
    const regex = new RegExp('^[0-9]{5}(?:-[0-9]{4})?$');
    if (control && (control.value!= null || control.value!=undefined)){
        
        if(control.value.length==5){
            return {
                isError : false
            };
            
        }
        else if((control.value.length>5) && (control.value.length == 10)){
            if(!regex.test(control.value)){
                return {
                    isError : true
                };
            }
        }else{
            return {
                isError : true
            };
        }
        
    }
  }
