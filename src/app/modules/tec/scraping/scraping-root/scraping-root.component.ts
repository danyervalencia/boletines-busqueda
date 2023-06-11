import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { YearsService } from '../../../../services/arrays/years.service';
import { DataTecService } from '../../../../services/data-tec.service';
import { DataSegMenuAccessService } from '../../../../services/data-seg-menu-access.service';
import { IconService } from '../../../../services/icon.service';
import { RootService } from '../../../../services/root.service';
import { PagerComponent } from '../../../../share/components/pager/pager.component';
import { SpinnerComponent } from '../../../../share/components/spinner/spinner.component';
import { SeccionesService } from 'src/app/services/arrays/tec/secciones.service';

@Component({
	selector: 'app-scraping-root',
	templateUrl: './scraping-root.component.html',
	styleUrls: ['./scraping-root.component.scss'],
	//encapsulation: ViewEncapsulation.None
})
export class ScrapingRootComponent implements OnInit {
	formFilt!: UntypedFormGroup; jSeccion:any = []; loadScraping:boolean = false; dsbFilt:boolean = false;
	//haveTask:boolean = true; fileURL:any; loadEttr:boolean = false; 
	compRef!: ComponentRef<any>;
	@ViewChild(PagerComponent) pagComp!: PagerComponent;
	@ViewChild(SpinnerComponent) spnComp!: SpinnerComponent;
	@ViewChild('modal', { read: ViewContainerRef }) Modal!: ViewContainerRef;
	//@Input() tab1:any; @Input() tab3:any; @Input() tab4:any;

    constructor(private fb: UntypedFormBuilder, private route: ActivatedRoute,
				private menuSrv: DataSegMenuAccessService, private asSrv: SeccionesService, 
				private dbtSrv: DataTecService, public rootSrv: RootService, public icoSrv: IconService) {
        this.rootSrv.setMenuKey(this.route.snapshot.paramMap.get('key'));
    }

    ngOnInit():void {
        /*this.menuSrv.select({CredAcceKey:this.rootSrv.credacceKey, MenuKey:this.rootSrv.menuKey}).subscribe((data) => {
            this.rootSrv.setOpc(data, [0,1,2,4,12,41]);
        });*/

		this.jSeccion = this.asSrv.getData();
        this.formFilt = this.fb.group({
            seccion: '', texto: '',
            sessKey: this.rootSrv.sessKey, menuKey: this.rootSrv.menuKey
        });
    }

    get frm() { return this.formFilt.controls; }

    grdClean(p:number = 1):void {
        this.rootSrv.clean();
        if(p==1){ this.pagComp.clean(); }
    }

    grdRefresh(page:number) {
        this.dsbFilt = true;
        this.loadScraping = true;
        this.rootSrv.rows = [];
        this.rootSrv.countAll = 0;
        this.rootSrv.countPage;
        this.frm['seccion'].disable();
        this.frm['texto'].disable();
        this.grdClean(0);
        

        this.dbtSrv.select('fuentes/by-secc-esta', {seccion: this.frm['seccion'].value}).subscribe((res:any) => {
            let fuentes = res.data;
            let nro = fuentes.length;
            fuentes.forEach((value:any, index:any) => {
                this.dbtSrv.select('searches', {key: value.key, texto: this.frm['texto'].value }).subscribe((res:any) => {
                    let searches = res.data;
                    if ( searches != undefined && searches.length > 0) {
                        this.rootSrv.countAll += searches.length;
                        this.rootSrv.countPage += searches.length;
                        this.pagComp.refresh(1, this.rootSrv.countAll, this.rootSrv.countPage); //this.rootSrv.recordLimit

                        searches.forEach((value:any, index:any) => {
                            value.titulo = this.resaltarTexto(value.titulo);
                            value.descripcion = this.resaltarTexto(value.descripcion);
                            this.rootSrv.rows.push(value);
                        });
                    }

                    if ( nro == (index + 1)) {
                        this.dsbFilt = false;
                        this.loadScraping = false;
                        this.frm['seccion'].enable();
                        this.frm['texto'].enable();                
                    }    
                });
            })
        });
    }

    grdSelected(r:any){
        this.rootSrv.row = r;
        let $param = {
            boletKey: r.bolet_key,
            sessKey: this.rootSrv.sessKey, menuKey: this.rootSrv.menuKey, typeRecord: 'info'
        }
    }

    filtersEnter(){
        this.grdRefresh(1);
    }

    goToLink(url:string, prefix:string){
        console.log(prefix+url);
        window.open(prefix+url, '_blank');
    }

    resaltarTexto(texto:string){
        const input = document.getElementById("txtSearch");
        
        //input.addEventListener("input", () => {
        const search = this.frm['texto'].value; //input.value;
        /*const sections = document.querySelectorAll(".tdTitle");
        sections.forEach((el:any) => {

            console.log(el);
            el.innerHTML = el.innerText;
            el.removeAttribute("style");
        });*/
        if (search.trim() !== "") {
            //sections.forEach((el:any) => {
            if (texto.toLowerCase().includes(search.toLowerCase())) {
                texto = texto.replace(new RegExp(`(${search})`,"i"), "<mark><strong>$1</strong></mark>");
            }
            //});
        }
        return texto;
        //});
    }

	yearChange() { //year_id: number
        this.grdClean();
    }
}