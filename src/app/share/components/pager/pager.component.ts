import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IconService } from '../../../services/icon.service';

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html',
    styleUrls: ['./pager.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagerComponent implements OnInit {
    pageMax:number = 0; pageInfo:string = ''; txtPage:number = 0; 
    private _isDsb:boolean = false; isDsbFirst:boolean = true; isDsbLast:boolean = true;

    @Input() countAll:number = 0;
    @Input() countPage:number = 0;
    @Input() recordLimit:number = 500;
    @Output() fnRefresh = new EventEmitter<number>();
    @Input() set isDsb(v) { this._isDsb = v; }
    get isDsb(): boolean { return this._isDsb; }

    constructor(public icoSrv: IconService) { }

    ngOnInit() {
        this.txtPage = 0;
    }

    clean() {
        this.txtPage = 0;
        this.pageMax = 0;
        this.pageInfo = '';
        this.isDsbFirst = true;
        this.isDsbLast = true;
    }

    refresh(page:number, countAll:number = 0, countPage:number = 0) {
        if ( countAll > 0 ) {
            this.txtPage = page;
            let recordIni = (page-1) * this.recordLimit;
            let recordFin = recordIni + ( countPage > 0 ? countPage : this.countPage);
            this.isDsbFirst = (page == 1 ? true : false);
            this.isDsbLast = (page == Math.ceil(countAll / this.recordLimit) ? true : false);
            this.pageMax = Math.ceil(countAll / this.recordLimit);
            this.pageInfo = 'Registros:  ' + (recordIni + 1) +' - '+ recordFin +'  de  '+ countAll;
        } else {
            this.clean();
            this.setPageInfo('Ningún Registro encontrado');
        }
    }

    refreshGrd(){
        let _page = (this.txtPage*1 <= 0 ? 1 : this.txtPage);
        _page = (this.txtPage > this.pageMax ? this.pageMax : _page);
        this.fnRefresh.emit(_page);
    }

    first() {
        this.txtPage = 1;
        this.refreshGrd();
    }

    prev() {
        this.txtPage = ( this.txtPage*1 ) - 1;
        this.refreshGrd();
    }

    next() {
        this.txtPage = ( this.txtPage*1 ) + 1;
        this.refreshGrd();
    }

    last() {
        this.txtPage = this.pageMax;
        //this.txtPage = Math.ceil(this.countAll / 500);
        this.refreshGrd();
    }

    setPageInfo(info:string){
        this.pageInfo = info;
    }
}