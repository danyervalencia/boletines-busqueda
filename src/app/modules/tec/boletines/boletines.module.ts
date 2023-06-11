import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/share/directives/directives.module';
import { BoletinesRoutingModule } from './boletines-routing.module';
import { BoletinesComponent } from './boletines.component';
import { BoletinesRootComponent } from './boletines-root/boletines-root.component';
import { PagerModule } from 'src/app/share/components/pager/pager.module';
import { SpinnerModule } from 'src/app/share/components/spinner/spinner.module';
import { RootService } from 'src/app/services/root.service';

@NgModule({
	declarations: [
		BoletinesComponent, BoletinesRootComponent
	],
	imports: [
		CommonModule, FormsModule, DirectivesModule, ReactiveFormsModule, 
		BoletinesRoutingModule, PagerModule, SpinnerModule
	],
	providers: [ RootService ]
})
export class BoletinesModule { }
