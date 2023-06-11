import { TipoSeccion } from "./tipo-seccion";
import { TipoBusqueda } from "./tipo-busqueda";

export class Fuente {
    key: string = '';
    nombre: string;
    abrev: string = '';
    estado: number = 0;
    url: string = '';
    query: string = '';
    contenedor: string = '';
    titulo: string = '';
    descripcion: string = '';
    href: string = '';
    hrefattr: string = '';
    hrefprefix: string = '';
    dtos: string = '';
    imagen: string = '';
    seccion: TipoSeccion;
    busqueda: TipoBusqueda;
}