import {FormControl} from "@angular/forms";
/**
 * Created by Shivaji on 1/4/17.
 */
export function restrictedWords(words) {
    return (control: FormControl): { [key: string]: any } =>
    {
        if(!words) return null;

        var invalidWordsFound = words.map(w => control.value.includes(w)? w : null)
            .filter(w => w!=null);

        return invalidWordsFound && invalidWordsFound.length >0
            ? {'restrictedWords': invalidWordsFound.join(',')}
            : null;
    }
}
