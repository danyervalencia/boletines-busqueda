import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class DataSegService {
    url:string = ''; options: any;
    constructor(private http: HttpClient, private toastr: ToastrService, private apiSrv: ApiService){
        this.url = this.apiSrv.url + 'seg/';
        /*this.url = this.apiSrv.url + 'seg/';
        this.options = {
            headers: new HttpHeaders({Accept: 'application/json', 'Content-Type': 'application/json'})
        };*/
    }

    select(Route:string, Parameters:any){
        return this.http.get(`${this.url}${Route}`,
            { params: Parameters, headers: this.apiSrv.getHttpHead() }).
            pipe(retry(1), catchError(this.handleError));

        //return this.http.get(`${this.url}${Route}`,
        //    { params: Parameters, headers: this.apiSrv.getHttpHead() });
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

    access(Parameters:any) {
        return this.http.get(`${this.apiSrv.url}auth/access`, { params: Parameters });
    }

    authenticate(Parameters:any):Observable<any> {
        return this.http.post(`${this.apiSrv.url}auth`, Parameters, this.options).pipe(
            //tap((resp: JwtResponse) => this.setSession(resp)),
            //shareReplay()
            catchError((err) => {
                let message = ( err.status == 400 ? err.error.errors[0] : err.error.message );
                this.toastr.error(message, '¡Validación de Aplicación!');
                return throwError(err);
            })
        );
    }

    credenciales_accesos_menus_opcionesSelect(RouteAux:string, Parameters:any) {
        return this.http.get(`${this.url}credenciales_accesos_menus_opciones_${RouteAux}`,
            { params: Parameters, headers: this.apiSrv.getHttpHead() });
    }

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