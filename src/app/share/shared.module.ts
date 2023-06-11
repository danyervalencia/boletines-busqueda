import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagerComponent } from './components/pager/pager.component';
import { DisabledControlDirective } from './directives/disabled-control.directive';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
    declarations: [PagerComponent, DisabledControlDirective, DialogComponent],
    imports: [ CommonModule ],
})
export class SharedModule { }