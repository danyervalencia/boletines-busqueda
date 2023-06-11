import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    info: any = []; open:boolean = true;
    key:string = ''; keyAux:string = ''; menuKey:string = '';
    state:boolean = true; typeEdit:number = 0; title:string = ''; titleIco:string = ''; 
    credacceKey:string = ''; sessKey:string = '';
  
    constructor(private storeSrv: LocalStoreService){ 
        this.sessKey = this.storeSrv.getItem('userInfo').sess_key;
    }
}