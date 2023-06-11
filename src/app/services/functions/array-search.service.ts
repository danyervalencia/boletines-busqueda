import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ArraySearchService {
    getArrayElemet(Array:any = [], Elemento:string, Valor:string){
        let _r = Array.find(function (e:any) {
            if ( e[Elemento] == Valor){ return e; }
        });
    
        return _r;
    }
    
    getArrayLastElemet(Array:any = [], Elemento:string, Valor:string){
        let _r:any = [];
        Array.find(function (e:any) {
            if ( e[Elemento] == Valor ){ _r = e; }
        });
        return _r;
    }
}