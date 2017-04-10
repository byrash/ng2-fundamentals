import {Component, ElementRef, Inject, Input, ViewChild} from "@angular/core";
import {JQ_TOKEN} from "../services/jQuery.service";
/**
 * Created by Shivaji on 5/4/17.
 */
@Component({
    selector: 'simple-modal',
    template: `
        <div id="{{elementId}}" class="modal fade" tabindex="-1" #modalContainer>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title">{{title}}</h4>
                    </div>
                    <div class="modal-body" (click)="cancelModelPopUp()">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .modal-body {
            height: 250px;
            overflow-y: scroll;
        }
    `]
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild("modalContainer") modelContainerEl: ElementRef;
    @Input() closeModelOnClick: string

    constructor(@Inject(JQ_TOKEN) private $: any) {
    }

    cancelModelPopUp() {
        if (this.closeModelOnClick.toLocaleLowerCase() === 'true') {
            this.$(this.modelContainerEl.nativeElement).modal('hide');
        }
    }
}