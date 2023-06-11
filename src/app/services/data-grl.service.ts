import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './api.service';


@Injectable({ providedIn: 'root' })
export class DataGrlService {
    url:string = ''; options: any;
    constructor(private http: HttpClient, private toastr: ToastrService, private apiSrv: ApiService){
        this.url = this.apiSrv.url + 'grl/';
        /*this.url = this.apiSrv.url + 'seg/';
        this.options = {
            headers: new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'})
        };*/
    }

    select(route:string, Parameters:any){
        console.log(route);
        return this.http.get(`${this.url}${route}`,
            { params: Parameters, headers: this.apiSrv.getHttpHead() }).
            pipe(retry(1), catchError(this.handleError));
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

    /*    
    conceptos_requisitosREPORT(_data:any) {
        return this.http.post(`${this.url}reports/conceptos_requisitos_report`, _data, 
            { responseType: 'arraybuffer' });
    }

    personasSearchAPI(_data:any) {
        return this.http.get(`${this.url}personas_searchAPI`, { params: _data });
    }*/

    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Get client-side error
            errorMessage = error.error.message;
        } else {
          // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => { return errorMessage; });
    }
}