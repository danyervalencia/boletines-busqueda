import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { LocalStoreService } from "./local-store.service";

@Injectable({ providedIn: 'root' })
export class ApiService {
    url:string = environment.apiUrl; //private baseUrl = 'http://200.60.83.163/api';
    token:string = ''; httpOptions:any;
    constructor(private store: LocalStoreService) { }
    
    getHttpHead(){
        this.token = this.store.getItem('token');
        if( this.token ){
            this.httpOptions = new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + this.token
            });
        } else {
            this.httpOptions = [];
        }
        return this.httpOptions;  
    }

    /*this.httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
    })
    }*/
}