import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';

@Injectable({
    providedIn: 'root'
})
export class TabService {
    countAll:number = 0; countPage:number = 0; 
    sessKey:string = ''; credacceKey:string = ''; areaKey:string = '';
    dsbBtn:boolean = true; menuKey:string = '';
    opc:any = {}; openWin:boolean = false; recordLimit:number = 500;
    row:any = []; rows:any = []; rowsOpc:any = [];
    
    constructor(private storeSrv: LocalStoreService){ 
        this.sessKey = this.storeSrv.getItem('userInfo').sess_key;
        this.credacceKey = this.storeSrv.getItem('userInfo').credacce_key;
        this.areaKey = this.storeSrv.getItem('userInfo').area_key;
    }

    clean(){
        this.countAll = 0; 
        this.dsbBtn = true;
        this.row = [];
        this.rows = []; 
    }

    foundOpc(OpcId:number):boolean{
        let _o = this.rowsOpc.findIndex((a:any) => a.opc == OpcId);
        return ( _o >= 0 ? false : true );
    }

    /*generateRS(Page:number, RecordLimit:number = this.recordLimit):number{
        return (Page - 1) * RecordLimit;
    }*/

    setOpc(data:any, OpcGroup:any = []):void{
        this.rowsOpc = data;
        OpcGroup.forEach((value:any)=> {
            this.opc['_'+value] = this.foundOpc(value);
        });
    }
}