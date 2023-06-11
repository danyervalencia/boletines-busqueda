import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class DataBaseService {
    url:string = '';
    constructor(private http: HttpClient, private apiSrv: ApiService){
        this.url = this.apiSrv.url + 'grl/';
    }

    select(Route:string, Parameters:any){
        return this.http.get(`${this.url}${Route}`,
            { params: Parameters, headers: this.apiSrv.getHttpHead() });
    }

    update(Route:string, Parameters:any){
        return this.http.post(`${this.url}${Route}`, Parameters,
            { headers: this.apiSrv.getHttpHead() });
    }

    conceptos_requisitosREPORT(_data:any) {
        return this.http.post(`${this.url}reports/conceptos_requisitos_report`, _data, { responseType: 'arraybuffer' });
    }

    personasSearchAPI(_data:any) {
        return this.http.get(`${this.url}personas_searchAPI`, { params: _data });
    }
}