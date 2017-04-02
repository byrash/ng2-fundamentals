import {OpaqueToken} from "@angular/core";
/**
 * Created by Shivaji on 13/3/17.
 */

export let TOASTR_TOKEN = new OpaqueToken('toastr');

export interface Toastr {

    success(message: string, title?: string): void;

    info(message: string, title?: string): void;

    warning(message: string, title?: string): void;

    error(message: string, title?: string): void;

}