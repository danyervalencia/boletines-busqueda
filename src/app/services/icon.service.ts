import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class IconService {
    private rutaIcon = './assets/images/icons/';
    private rutaImag = './assets/images/';

    constructor(private http: HttpClient) {
    }

    getIcon(Icon:string, Format:string = 'png'):string{
        return this.rutaIcon + Icon +'.'+ Format;
    }

    getIcoG(Icon:string):string{
        return this.rutaIcon + Icon + '.gif';
    }

    getIcoJ(Icon:string):string{
        return this.rutaIcon + Icon + '.jpg';
    }

    getImag(Imag:string, Format:string = 'png'):string{
        return this.rutaImag + Imag +'.'+ Format;
    }
}