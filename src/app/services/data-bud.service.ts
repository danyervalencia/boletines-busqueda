import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class DataBudService {
    url:string = '';
    constructor(private http: HttpClient, private apiSrv: ApiService){
        this.url = this.apiSrv.url + 'bud/';
    }
  
    delete(Route:string, Parameters:any){
        return this.http.delete(`${this.url}${Route}`,
            { params: Parameters, headers: this.apiSrv.getHttpHead() });
    }
  
    select(Route:string, Parameters:any){
        return this.http.get(`${this.url}${Route}`, 
            { params: Parameters, headers: this.apiSrv.getHttpHead() });
    }
  
    save(Type:number, Route:string, Parameters:any){
        if ( [1,21].includes(Type) ){
            return this.http.post(`${this.url}${Route}`, Parameters,
                { headers: this.apiSrv.getHttpHead() });
        } else {
            return this.http.put(`${this.url}${Route}`, Parameters,
                { headers: this.apiSrv.getHttpHead() });
        }
    }
  
    tareas_areasUPDATE(_data:any) {
        return this.http.post(`${this.url}tareas_areas`, _data);
    }
}