import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // con este modulo no necesitas usar fetch ni ajax ni nada.
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({ //  indica que el servicio puede ser inyectado mediante Inyección de dependencias en Angular. Primero tenemos que importar el servicio en el componente, y luego lo inyectamos en el constructor del componente
    providedIn: 'root' // permite que el servicio se autoimporte y no tengamos que importarlo en el app.module.ts
})
export class DataPubService {
    url:string = '';
    //HttpClient -> Aunque lo hayamos importado en la página de forma global, también tenemos que importarlo y inyectarlo en los constructores de los servicios desde los que vayamos a realizar llamadas HTTP.
    constructor(private http: HttpClient, private apiSrv: ApiService){
        this.url = this.apiSrv.url + 'pub/';
    }
    
    download(Route:string, Parameters:any){
        return this.http.get(`${this.url}${Route}`,
        { params: Parameters, headers: this.apiSrv.getHttpHead(), responseType: 'blob' });
    }

    printer(Route:string, Parameters:any){
        //let url = 'http://127.0.0.1:8000/api/tec/';
        //return this.http.get(`${this.url}reports/${Route}`,
        return this.http.get(`${this.url}${Route}`,
        { params: Parameters, headers: this.apiSrv.getHttpHead(), responseType: 'blob' });
    }

    select(Route:string, Parameters:any):Observable<any>{
        return this.http.get(`${this.url}${Route}`,
            { params: Parameters, headers: this.apiSrv.getHttpHead() }).
            pipe(retry(1), catchError(this.handleError));
        //map((r: Response) => r.json().data as Hero[]);
    }


    search(Route:string, Parameters:any):Observable<any>{
        let url = 'http://127.0.0.1:8000/api/tec/';
        return this.http.get(`${url}${Route}`,
            { params: Parameters, headers: this.apiSrv.getHttpHead() }).
            pipe(retry(1), catchError(this.handleError));
    }

    handleError(error: any) {
        let errorMessage = (error.error.message ? error.error.message : error.error.errors[0]);
        if (error.error instanceof ErrorEvent) { // Get client-side error
            errorMessage = errorMessage;
        } else { // Get server-side error
            //errorMessage = 'Code ' + error.status +".\n"+ errorMessage;
            errorMessage = errorMessage;
        }
        return throwError(() => { return errorMessage; });
    }
}