import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataSegService } from '../data-seg.service';
import { LocalStoreService } from '../local-store.service';

const TOKEN_NAME = 'token';
const TOKEN_EXPIRES = 'tokenExpires';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private authenticated: boolean = false;
    res: any = null;
    private baseURL = environment.apiUrl;

    constructor(private http: HttpClient, private router: Router, private toastr: ToastrService,
                private dbsSrv: DataSegService, private store: LocalStoreService) {
        this.checkAuth();
    }

    public checkAuth() {
        this.authenticated = this.store.getItem(TOKEN_NAME);
        //this.authenticated = this.store.getItem('sysToken');
    }

    public getUser() {
        return of({});
    }

    public getAutenthicated() {
        //return this.authenticated;
        return ( this.store.getItem(TOKEN_NAME) ? true : false);
    }

    public authenticate(credentials:any) {
        // es una buena practica identificar las variables observables con un signo de $ al final
        let auth$ = this.dbsSrv.authenticate(credentials);
        //this.dbsSrv.authenticate(credentials).subscribe((data:any) => {
        auth$.subscribe({
            next: (res) => {
            //(data:any) => {
            //if ( data.success ) {
                this.authenticated = true;
                this.store.setItem(TOKEN_NAME, res.token);
                this.store.setItem(TOKEN_EXPIRES, res.expiration);
                this.store.setItem("roles", res.roles);
                this.store.setItem("appInfo", {
                    appNombre: "Observatorio de Ciencia Tecnología e Innovación", //data['info'][0].system_nombre,
                    uniejeCode: "301492", //data['info'][0].unieje_codigo,
                    uniejeNombre: "CONCYTEC" //data['info'][0].unieje_nombre
                });
                this.store.setItem('userInfo', {
                    sessKey: "abcd12345601548787814521245252", //data['info'][0].sess_key,
                    usurpermKey: "abcd12345601548787814521245252", //data['info'][0].credacce_key,
                    uniejeKey: "abcd12345601548787814521245252", //data['info'][0].area_key,
                    filKey: "abcd12345601548787814521245252", //data['info'][0].fil_key,
                    persKey: "abcd12345601548787814521245252", //data['info'][0].pers_key,
                    uniorgNombre: "Oficina de Tecnologías de Información", //data['info'][0].area_nombre,
                    cargNombre: "Especialista en Desarrollo de Software", // data['info'][0].carg_nombre,
                    filNombre: "Filial Nombre", //data['info'][0].fil_nombre,
                    persApenom: "VALENCIA LLAMOCA; DANYER ALAIN", //data['info'][0].pers_apenom,
                    persDocumento: "04748032" //data['info'][0].pers_documento
                });
            }
        });
        return of({ mensaje: '' }).pipe(delay(2000));
    }

    public logout() {
        this.authenticated = false;
        this.store.setItem(TOKEN_NAME, '');
        this.store.setItem(TOKEN_EXPIRES, '');
        this.store.setItem('sysInfo', undefined);
        this.store.setItem('userInfo', undefined);
        this.store.clear();
        this.router.navigateByUrl('/sessions/login');
    }

    isLoggedIn(): boolean {
        return Date.now() < this.getExpiration();
    }

    isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    getToken():string {
        return this.store.getItem(TOKEN_NAME);
        //return localStorage.getItem(TOKEN_NAME);
    }

    getExpiration(): number {
        const expiration:any = this.store.getItem(TOKEN_EXPIRES);
        const expiresAt = JSON.parse(expiration);
        return expiresAt;
    }
}