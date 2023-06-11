import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchesComponent } from './searches.component';

const routes: Routes = [{ path: '', component: SearchesComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SearchesRoutingModule { }