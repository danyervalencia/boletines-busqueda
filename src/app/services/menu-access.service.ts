import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class MenuAccessService {
    url:string = '';
    constructor(private http: HttpClient, private apiSrv: ApiService){
        this.url = this.apiSrv.url + 'seg/';
    }
  
    select(Parameters:any){
        return this.http.get(`${this.url}credenciales_accesos_menus_opciones_access`,
            { params: Parameters, headers: this.apiSrv.getHttpHead() });
    }
}