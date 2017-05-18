import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {EventsAppModule} from "./app/events-app.module";
import {enableProdMode} from "@angular/core";

enableProdMode();
platformBrowserDynamic().bootstrapModule(EventsAppModule);
