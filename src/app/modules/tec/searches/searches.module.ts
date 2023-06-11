import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagerModule } from 'src/app/share/components/pager/pager.module';
import { SpinnerModule } from 'src/app/share/components/spinner/spinner.module';
import { DirectivesModule } from 'src/app/share/directives/directives.module';
import { RootService } from '../../../services/root.service';
import { SearchesRoutingModule } from './searches-routing.module';
import { SearchesComponent } from './searches.component';
import { SearchesRootComponent } from './searches-root/searches-root.component';

@NgModule({
	declarations: [
		SearchesComponent, SearchesRootComponent
	],
	imports: [
		CommonModule, FormsModule, DirectivesModule, ReactiveFormsModule, 
		SearchesRoutingModule, PagerModule, SpinnerModule
	],
	providers: [ RootService ]
})
export class SearchesModule { }
