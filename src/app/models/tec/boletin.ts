export class Boletin {
    key: string;
    yearId: number;
    fecha: Date;
    objetivo: string;
    glosa: string;
    estado: string;
    document: string;

    constructor(obj?:any){
        this.key = obj && obj.key || null;
        this.yearId = obj && obj.yearId || null;
        this.fecha = obj && obj.fecha || null;
        this.objetivo = obj && obj.objetivo || null;
        this.glosa = obj && obj.glosa || null;
        this.estado = obj && obj.estado || null;
        this.document = obj && obj.document || null;
    }
}