import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IconService } from '../../../services/icon.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
    private _open:boolean = true; 
    private _typeDialog:number = 0;
    private _headTitle:string = 'Confirmar'; 
    private _info:string = '¿Esta seguro de  ELIMINAR  el registro seleccionado?';
    private _rutaUrl:string = 'assets/images/share/question.png';
    @Output() close: EventEmitter<boolean> = new EventEmitter();
  
    constructor(public icoSrv: IconService){ }

    set headTitle(v) { this._headTitle = v; }
    set info(v) { this._info = v; }
    set open(v) { this._open = v; }
    set rutaUrl(v) { this._rutaUrl = v; }
    set typeDialog(v) { this._typeDialog = v; }
    get headTitle():string { return this._headTitle; }
    get info():string { return this._info; }
    get open():boolean { return this._open; }
    get rutaUrl():string { return this._rutaUrl; }
    get typeDialog():number { return this._typeDialog; }

    ngOnInit() {
    }

    fnInit(typeDialog:number = 1){
        this.typeDialog = typeDialog;
    }

    fnCancel(){
        this.open = false;
        this.close.emit(false);
    }

    fnAcept(){
        this.open = false;
        this.close.emit(true);
    }
}