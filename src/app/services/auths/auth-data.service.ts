import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthDataService {
    system_nombre: string = "";
    unieje_nombre: string = "";
    area_nombre: string = "";
    carg_nombre: string = "";
    fil_nombre: string = "";
    pers_documento: string = "";
    pers_apenom: string = "";
    
    constructor() { }
}