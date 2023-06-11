import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../../../services/module.service';

@Component({
	selector: 'app-boletines',
	templateUrl: './boletines.component.html',
	styleUrls: ['./boletines.component.scss']
})
export class BoletinesComponent implements OnInit {
	constructor(private route: ActivatedRoute, public modSrv: ModuleService) { 
    	//let _menu = this.route.snapshot.paramMap.get('key'); 
		this.modSrv.title = "Búsqueda de Información en Boletines";
	}

	ngOnInit(): void {
	}

	fnTabActive(tab:any){
		this.modSrv.tabAct = tab;
	}


}
