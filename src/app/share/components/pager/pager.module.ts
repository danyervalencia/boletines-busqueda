import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagerComponent } from './pager.component';

@NgModule({
    declarations: [ PagerComponent ],
    imports: [ CommonModule, FormsModule ],
    exports: [ PagerComponent ],
})
export class PagerModule {}