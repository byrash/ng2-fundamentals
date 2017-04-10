import {Directive, ElementRef, Inject, Input, OnInit} from "@angular/core";
import {JQ_TOKEN} from "../services/jQuery.service";
/**
 * Created by Shivaji on 5/4/17.
 */
@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    @Input('modal-trigger') modalElementId : string;
    element: HTMLElement;

    constructor(private elemRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.element = elemRef.nativeElement;
    }

    ngOnInit(): void {
        this.element.addEventListener('click',() => {
            this.$(`#${this.modalElementId}`).modal({});
        });
    }
}