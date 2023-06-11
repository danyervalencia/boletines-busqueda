import { AfterViewInit, Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';
import { YearsService } from '../../../../services/arrays/years.service';
import { DataPubService } from '../../../../services/data-pub.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IconService } from '../../../../services/icon.service';
import { RootService } from '../../../../services/root.service';
import { PagerComponent } from '../../../../share/components/pager/pager.component';
import { SpinnerComponent } from '../../../../share/components/spinner/spinner.component';
import { ImagService } from 'src/app/services/imag.service';
import { Router } from '@angular/router';
import { DataTecService } from 'src/app/services/data-tec.service';

@Component({
	selector: 'app-searches-root',
	templateUrl: './searches-root.component.html',
	styleUrls: ['./searches-root.component.scss'],
    //encapsulation: ViewEncapsulation.None
})
export class SearchesRootComponent implements OnInit, AfterViewInit {
    formFilt!: FormGroup; jYear:any = [];
    compRef!: ComponentRef<any>;
    @ViewChild(PagerComponent) pagComp!: PagerComponent;
    @ViewChild(SpinnerComponent) spnComp!: SpinnerComponent;
    @ViewChild('modal', { read: ViewContainerRef }) Modal!: ViewContainerRef;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
                public imgSrv: ImagService, private aySrv: YearsService, public icoSrv: IconService,
                private dbpSrv: DataPubService, private dbtSrv: DataTecService, public rootSrv: RootService) {
        //this.rootSrv.setMenuKey(this.route.snapshot.paramMap.get('key'));
    }
    ngAfterViewInit(): void {
        this.pagComp.recordLimit = this.rootSrv.recordLimit;
    }

    ngOnInit():void {
        this.rootSrv.recordLimit = 50;
		this.jYear = this.aySrv.getData();
        this.formFilt = this.fb.group({
            yearIni: '', yearFin: '', nroIni: '', nroFin: '', dateIni: '', dateFin: '', texto: '',
            menuKey: this.rootSrv.menuKey,
            orderBy: 'fecha', orderType: "desc", page: 0, recordLimit: this.rootSrv.recordLimit,
        });
    }

    get frm(){ return this.formFilt.value; }

    changeLimit(){
        this.pagComp.recordLimit = this.frm.recordLimit;
    }

    grdClean(p:number = 1):void {
        this.rootSrv.clean();
        if( p == 1 ){ this.pagComp.clean(); }
    }

    grdRefresh(page:number) {
        this.spnComp.show();
        this.grdClean(0);
        this.formFilt.controls["page"].setValue(page - 1);

        this.dbpSrv.select('boletines-detalles/searches', this.frm)?.subscribe({
            next: (res:any) => {
                this.rootSrv.rows = res.data;
                this.rootSrv.countAll = res.countAll;
                this.rootSrv.countPage = res.data.length;
                this.pagComp.refresh(page, res.countAll, res.data.length);
                this.spnComp.hide();
            }
        });
    }

    grdSelected(r:any){
        this.rootSrv.row = r;
    }

    filtersEnter(){
        this.grdRefresh(1);
    }
    
    async downPdf(key:String, nro:number, yearId:string){
        this.dbpSrv.printer('boletines/pdf-printer/'+key, {}).subscribe({
            next: (blob:any) => {
                //saveAs(blob, "filename")
                saveAs(blob, 'Boletin_VITEC_' +(nro > 9 ? nro : '0'+(nro+'')) +'-'+ yearId);
            }
        });
    }

    viewPage(key:String, tiseccId:String, item:String){
        this.router.navigateByUrl('/b58a2386/'+key+'_'+tiseccId+''+item);
    }

    goToLink(url:string){
        window.open(url, '_blank');
    }

	yearChange() { //year_id: number
        this.grdClean();
    }
}