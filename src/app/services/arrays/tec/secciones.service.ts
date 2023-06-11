import { Injectable } from '@angular/core';
import { TipoSeccion } from 'src/app/models/tec/tipo-seccion';

@Injectable({ providedIn: 'root' })
export class SeccionesService {
    constructor() { }

    getData() {
        return [
            new TipoSeccion({id: '11', nombre: 'NOTICIAS', abrev: 'NOT'}),
            new TipoSeccion({id: '12', nombre: 'PATENTES', abrev: 'PAT'}),
            new TipoSeccion({id: '13', nombre: 'INVESTIGACIONES', abrev: 'INV'}),
            new TipoSeccion({id: '14', nombre: 'CONFERENCIAS', abrev: 'CONF'}),
            new TipoSeccion({id: '15', nombre: 'PROYECTOS', abrev: 'PRY'}),
            new TipoSeccion({id: '21', nombre: 'MERCADOS', abrev: 'MER'})
        ];
    }
}