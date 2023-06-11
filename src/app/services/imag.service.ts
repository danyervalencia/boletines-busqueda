import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ImagService {
    private ruta = './assets/images/';

    constructor(private http: HttpClient) {
    }
    
    getIcon(Icon:string, Format:string = 'png'):string{
        return this.ruta + Icon +'.'+ Format;
    }

    getIcoG(Icon:string):string{
        return this.ruta + Icon + '.gif';
    }

    getIcoJ(Icon:string):string{
        return this.ruta + Icon + '.jpg';
    }
}