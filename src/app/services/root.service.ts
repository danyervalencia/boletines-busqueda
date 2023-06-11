import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';

@Injectable({ providedIn: 'root' })
export class RootService {
    anexo1:string = ""; anexo2:string = "";
    sessKey:string = ''; credacceKey:string = ''; areaKey:string = ''; 
    dataInfo:any = []; dsbBtn:boolean = true; 
    isDsb:boolean = true; menuKey!:string; opc:any = {};
    countAll:number = 0;  countPage:number = 0; recordLimit:number = 500; row:any = []; 
    rowAux:any = []; rows:any = []; rowsOpc:any = [];
    title:string = '';
    
    constructor(private strSrv: LocalStoreService){
        this.countPage = 0;
        //this.sessKey = this.strSrv.getItem('userInfo').sess_key;
        //this.credacceKey = this.strSrv.getItem('userInfo').credacce_key;
        //this.areaKey = this.strSrv.getItem('userInfo').area_key;
    }

    clean(){
        this.anexo1   = ""; this.anexo2    = "";
        this.countAll = 0;  this.countPage = 0; this.dataInfo = [];
        this.dsbBtn = true; this.isDsb = true; 
        this.row = []; this.rowAux = []; this.rows = [];
    }

    foundOpc(OpcId:number):boolean{
        let _o = this.rowsOpc.findIndex((a:any) => a.opc == OpcId);
        return ( _o >= 0 ? false : true );
    }

    generateRS(Page:number, RecordLimit:number = this.recordLimit):number{
        return (Page - 1) * RecordLimit;
    }

    setMenuKey(menuKey:any):void{
        this.menuKey = menuKey
    }

    setOpc(data:any, OpcGroup:any = []):void{
        this.rowsOpc = data;
        OpcGroup.forEach((value:any)=> {
            this.opc['_'+value] = this.foundOpc(value);
        });
    }

    setCountAll(countAll:number){
        this.countAll = countAll;
        this.countAll = countAll;
    }
    setCountPage(countPage:number){
        this.countPage = countPage;
        this.countPage = countPage;
    }
}