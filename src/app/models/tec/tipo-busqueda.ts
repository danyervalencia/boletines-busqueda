export class TipoBusqueda {
    id: string;
    nombre: string;
    abrev: string;

    constructor(obj?:any) {
        this.id = obj && obj.id || '';
        this.nombre = obj && obj.nombre || null;
        this.abrev = obj && obj.abrev || null;
    }
}
