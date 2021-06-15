import {FormControl} from '@angular/forms' 

const letterNumber = /^[A-Za-z]+$/;


export class MyValidators {
    
    static checkVal(control: FormControl): {[key: string]: any} | null {
        if((control.value.match(letterNumber))){
            return {checkVal: true}
        }
        return null
    }
}
