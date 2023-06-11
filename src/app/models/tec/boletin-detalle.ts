import { Boletin } from "./boletin";
import { TipoSeccion } from "./tipo-seccion";

export class BoletinDetalle {
    key: string = '';
    item: number;
    titulo: string = '';
    resumen: string = '';
    url: string = '';
    referencia: string = '';
    fuente: string = '';
    boletin = {} as Boletin;
    //boletin: Boletin = null;
    seccion: TipoSeccion;
    //tipoSeccion = {} as TipoSeccion;
}