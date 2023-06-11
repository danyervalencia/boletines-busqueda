import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class DataRrhService {
    url:string = '';
    constructor(private http: HttpClient, private apiSrv: ApiService){
        this.url = this.apiSrv.url + 'rrh/';
    }
    
    select(Route:string, Parameters:any){
        return this.http.get(`${this.url}${Route}`,
            { params: Parameters, headers: this.apiSrv.getHttpHead() });
    }
  
    save(type:number, route:string, parameters:any){
        if ( [1,21].includes(type) ){
            return this.http.post(`${this.url}${route}`, parameters,
                { headers: this.apiSrv.getHttpHead() });
        } else {
            return this.http.put(`${this.url}${route}`, parameters,
                { headers: this.apiSrv.getHttpHead() });
        }
    }
    /*update(Route:string, Parameters:any){
        return this.http.post(`${this.url}${Route}`, Parameters,
            { headers: this.apiSrv.getHttpHead() });
    }*/
}