import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletinesComponent } from './boletines.component';

const routes: Routes = [{ path: '', component: BoletinesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletinesRoutingModule { }
