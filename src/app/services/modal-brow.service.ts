import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';

@Injectable({
    providedIn: 'root'
})
export class ModalBrowService {
    anexo1:string = ''; dsbBtn:boolean = true; 
    count:number = 0;  countPage:number = 0;
    idx:number = 0; info: any = []; 
    key:string = ''; menuKey:string = '';
    open:boolean = true; recordLimit: number = 500;
    row: any = []; rows: any = []; title:string = ''; titleIco:string = ''; 
    credacceKey:string = ''; sessKey:string = '';
  
    constructor(private storeSrv: LocalStoreService){ 
        this.sessKey = this.storeSrv.getItem('userInfo').sess_key;
    }
  
    clean():void{
        this.count = 0;
        this.dsbBtn = true;
        this.row = [];
        this.rows = [];
    }
  
    generateRS(Page:number, RecordLimit:number = this.recordLimit):number{
        return (Page - 1) * RecordLimit;
    }
}
