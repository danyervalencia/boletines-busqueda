import { Component, OnInit } from '@angular/core';
import * as saveAs from 'file-saver';
import { DataPubService } from 'src/app/services/data-pub.service';
import { ImagService } from 'src/app/services/imag.service';
import { RootService } from 'src/app/services/root.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    
    constructor(public imgSrv: ImagService, 
                private dbpSrv: DataPubService, public rootSrv: RootService) { }

    ngOnInit() {
        this.dbpSrv.select('boletines', {recordLimit: 3})?.subscribe({
            next: (res:any) => {
                this.rootSrv.rows = res.data;
            }
        });
    }

    async downPdf(key:String, nro:number, yearId:string){
        this.dbpSrv.printer('boletines/pdf-printer/'+key, {}).subscribe({
            next: (blob:any) => {
                //saveAs(blob, "filename")
                saveAs(blob, 'Boletin_VITEC_' +(nro > 9 ? nro : '0'+(nro+'')) +'-'+ yearId);
            }
        });
    }

    async downUserManual(){
        this.dbpSrv.download('boletines/download-file/user-manual', {}).subscribe({
            next: (blob:any) => {
                saveAs(blob, "Manual_Usuario.pdf")
                //saveAs(blob, 'Boletin_VITEC_' +(nro > 9 ? nro : '0'+(nro+'')) +'-'+ yearId);
            }
        });
    }

    formatNroYear(nro:String, yearId:number){
        return "B/  " + ('00'+nro).substr(-2,2) +"-"+ yearId;
    }
}