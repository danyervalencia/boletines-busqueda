import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagerModule } from 'src/app/share/components/pager/pager.module';
import { SpinnerModule } from 'src/app/share/components/spinner/spinner.module';
import { DirectivesModule } from 'src/app/share/directives/directives.module';
import { RootService } from '../../../services/root.service';
import { ScrapingRoutingModule } from './scraping-routing.module';
import { ScrapingComponent } from './scraping.component';
import { ScrapingRootComponent } from './scraping-root/scraping-root.component';

@NgModule({
	declarations: [
		ScrapingComponent, ScrapingRootComponent
	],
	imports: [
		CommonModule, FormsModule, ReactiveFormsModule, DirectivesModule,
		ScrapingRoutingModule, PagerModule, SpinnerModule
	],
    providers: [ RootService ]
})
export class ScrapingModule { }
