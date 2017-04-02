import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormControl, Validators, FormGroup} from "@angular/forms";
import {ISession} from "../model/event.model";
import {restrictedWords} from "../index";

/**
 * Created by Shivaji on 19/3/17.
 */
@Component({
    selector:'create-session',
    templateUrl: 'app/create-session/create-session.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10pc;}
        .error input ,.error select, .error textarea {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-ms-input-placeholder {color: #999;}
    `]
})
export class CreateSessionComponent implements OnInit {

    @Output() createSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();

    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    newSessionForm: FormGroup;

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo','bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });
    }

    saveSession(formValues) {
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        this.createSession.emit(session);
    }

    cancel(){
        this.cancelAddSession.emit();
    }

}