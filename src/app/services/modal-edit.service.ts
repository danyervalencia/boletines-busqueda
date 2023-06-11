import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';

@Injectable({ providedIn: 'root' })
export class ModalEditService {
    info: any = [];
    key:string = '';  keyAux:string = ''; menuKey:string = '';
    open:boolean = true; row:any = []; state:boolean = true;
    title:string = ''; titleIco:string = ''; typeEdit:number = 0; 
    sessKey:string = ''; usuracceKey:string = ''; uniorgKey:string = '';

    constructor(private storeSrv: LocalStoreService){ 
        this.sessKey = this.storeSrv.getItem('userInfo').sess_key;
        this.uniorgKey = this.storeSrv.getItem('userInfo').uniorg_key;
    }
}