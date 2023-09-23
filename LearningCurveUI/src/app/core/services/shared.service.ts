import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    sidenavClass = new BehaviorSubject("");
    currentsidenavClass = this.sidenavClass.asObservable();

    constructor() {
    }

    setSidenavClass(contentClass: string) {
        this.sidenavClass.next(contentClass);
    }
}