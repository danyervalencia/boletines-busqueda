import { Injectable } from '@angular/core';
import { TipoBusqueda } from 'src/app/models/tec/tipo-busqueda';

@Injectable({ providedIn: 'root' })
export class BusquedasService {
    constructor() { }

    getData() {
        return [
            new TipoBusqueda({id: '1', nombre: 'HTML - HyperText Markup Language', abrev: 'HTML'}),
            new TipoBusqueda({id: '2', nombre: 'JSON - JavaScript Object Notation', abrev: 'JSON'})
        ];
    }
}