import { Component, ComponentRef, ElementRef, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YearsService } from '../../../../services/arrays/years.service';
import { DataPubService } from '../../../../services/data-pub.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IconService } from '../../../../services/icon.service';
import { RootService } from '../../../../services/root.service';
import { PagerComponent } from '../../../../share/components/pager/pager.component';
import { SpinnerComponent } from '../../../../share/components/spinner/spinner.component';
import { ImagService } from 'src/app/services/imag.service';
import { DataTecService } from 'src/app/services/data-tec.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
	selector: 'app-boletines-root',
	templateUrl: './boletines-root.component.html',
	styleUrls: ['./boletines-root.component.scss']
	  //encapsulation: ViewEncapsulation.None
})
export class BoletinesRootComponent implements OnInit {
    formFilt!: FormGroup; key:String = ''; tipseccId:String = ''; item:String = '';
    document:String = ''; fecha:any = null;
    compRef!: ComponentRef<any>;
    //@ViewChild(PagerComponent) pagComp!: PagerComponent;
    @ViewChild(SpinnerComponent) spnComp!: SpinnerComponent;
    //@ViewChild('modal', { read: ViewContainerRef }) Modal!: ViewContainerRef;
    @ViewChild('lblObjetivo', { static: true }) objetivo: ElementRef;
    //@ViewChild('lblDocument', { static: true }) document: ElementRef;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
                public modSrv: ModuleService, public imgSrv: ImagService, private aySrv: YearsService, public icoSrv: IconService,
                private dbpSrv: DataPubService, private dbtSrv: DataTecService, public rootSrv: RootService) {        
    }

    ngOnInit():void {
        let key:String = this.route.snapshot.paramMap.get('key')+'';
        let search:number = key.search('_');
        this.key = key.substring(0, (search));
        this.tipseccId = key.substring((search+1),(search+3));
        this.item = key.substring((search+3));

        this.dbtSrv.select('boletines/'+this.key, {typeRecord: 'frm'}).subscribe({
            next: (res:any) => {
                this.objetivo.nativeElement.innerHTML = res.data.objetivo;
                this.document = 'N° ' + ('00'+res.data.nro).substr(-2,2) +' - '+ res.data.yearId;
                this.fecha = res.data.fecha;
            }
        });

        this.dbpSrv.select('boletines-detalles', {boletKey: this.key}).subscribe({
            next: (res:any) => { this.rootSrv.rows = res.data; }
        });

        this.formFilt = this.fb.group({
            yearIni: '', yearFin: '', nroIni: '', nroFin: '', dateIni: '', dateFin: '', texto: '',
            menuKey: this.rootSrv.menuKey,
            orderBy: 'fecha', orderType: "desc", page: 0, recordLimit: this.rootSrv.recordLimit,
        });
        this.fnTabActive('tab'+this.tipseccId);
    }

    get frm(){ return this.formFilt.value; }

    goToLink(url:string){
        window.open(url, '_blank');
    }

    goToSearch(){
        this.router.navigateByUrl('/56d25a65');
    }

    fnTabActive(tab:any){
		this.modSrv.tabAct = tab;
	}
}