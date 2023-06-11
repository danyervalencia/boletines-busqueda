import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auths/auth.service';
import { IconService } from '../../../../services/icon.service';
import { ImagService } from '../../../../services/imag.service';
import { LocalStoreService } from '../../../../services/local-store.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	navbarItem: number = 0;

	constructor(public icoSrv: IconService, public imgSrv: ImagService, 
				public storeSrv: LocalStoreService, private authSrv: AuthService) { }

	ngOnInit() {
	}

	fnLogout() {
    	//this.authSrv.logout();
	}

	fnNavbarClick(Item:number):void{
    	//this.navbarItem = (this.navbarItem == Item ? 0 : Item);
	}
}