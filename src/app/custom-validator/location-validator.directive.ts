import {FormGroup, NG_VALIDATORS, Validator} from "@angular/forms";
import {Directive} from "@angular/core";
/**
 * Created by Shivaji on 9/4/17.
 */
@Directive({
    selector: '[validateLocation]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}
    ]
})
export class LocationValidator implements Validator {

    validate(formGroup: FormGroup): { [key: string]: any } {
        let addessControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];
        if ((addessControl && addessControl.value && cityControl && cityControl.value && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        } else {
            return {"validateLocation": false};
        }
    }

}