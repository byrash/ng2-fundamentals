import {Directive, ElementRef, Inject, OnInit} from "@angular/core";
import {JQ_TOKEN} from "../services/jQuery.service";
/**
 * Created by Shivaji on 5/4/17.
 */
@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    elemenet: HTMLElement;

    constructor(private elemRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.elemenet = elemRef.nativeElement;
    }

    ngOnInit(): void {
        this.elemenet.addEventListener('click',() => {
            this.$('#simple-modal').modal({});
        });
    }
}