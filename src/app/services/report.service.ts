import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';

@Injectable({
    providedIn: 'root'
})
export class ReportService {
    credacceKey:string = ''; sessKey:string = ''; menuKey:string = '';
    dsbBtn:boolean = true; filePdf:any;
    opc:any = {}; rowsOpc:any = [];
    
    constructor(private storeSrv: LocalStoreService){
        this.sessKey = this.storeSrv.getItem('userInfo').sess_key;
        this.credacceKey = this.storeSrv.getItem('userInfo').credacce_key;
    }
  
    foundOpc(OpcId:number):boolean{
        let _o = this.rowsOpc.findIndex( (a:any) => a.opc == OpcId);
        return ( _o >= 0 ? false : true );
    }
    
    setOpc(data:any, OpcGroup:any = []):void{
        this.rowsOpc = data;
        OpcGroup.forEach((value:any) => {
            this.opc['_'+value] = this.foundOpc(value);
        });
    }
}