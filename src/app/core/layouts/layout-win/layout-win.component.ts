import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout-win.component.html',
    styleUrls: ['./layout-win.component.scss'],
})
export class LayoutWinComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit():void {
        this.router.navigateByUrl('/56d25a65');
    }
}