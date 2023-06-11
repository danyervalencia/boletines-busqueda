import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../../../services/module.service';

@Component({
	selector: 'app-scraping',
	templateUrl: './scraping.component.html',
	styleUrls: ['./scraping.component.scss']
})
export class ScrapingComponent implements OnInit {
	constructor(private route: ActivatedRoute, public modSrv: ModuleService) { 
		let _menu = this.route.snapshot.paramMap.get('key'); 
		this.modSrv.title = "Scraping de Fuentes";
	}

	ngOnInit(): void {
	}

	fnTabActive(tab:any){
		this.modSrv.tabAct = tab;
	}
}
