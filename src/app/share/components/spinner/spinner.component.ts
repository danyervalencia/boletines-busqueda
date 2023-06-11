import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
    @Input() message:string = 'Ejecutando Consulta ...';
    @Input() spnName:string = 'spnComp';

    constructor(private spnService: NgxSpinnerService) { }

    ngOnInit(): void {}

    hide(Name:string = ''): void{
        this.spnName = ( Name == '' ? this.spnName : Name);
        this.spnService.hide(this.spnName)
    }

    setMessage(Message:string): void{
        this.message = Message;
    }

    show(FullScreen:boolean = false, Name:string = ''){
        this.spnName = ( Name == '' ? this.spnName : Name);
        this.spnService.show(this.spnName, {fullScreen: FullScreen})
    }

    /*fnHide(Name:string = ''): void{
        this.spnName = ( Name == '' ? this.spnName : Name);
        this.spnService.hide(this.spnName)
    }

    fnMessageLoad(Message:string): void{
        this.message = Message;
    }

    fnShow(FullScreen:boolean = false, Name:string = ''){
        this.spnName = ( Name == '' ? this.spnName : Name);
        this.spnService.show(this.spnName, {fullScreen: FullScreen})
    }*/
}