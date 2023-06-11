import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ModuleService {
    tabAct: string = 'tab1'; title: string = '';

    constructor() { }
}