import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutWinComponent } from './layout-win.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { SearchesComponent } from 'src/app/modules/tec/searches/searches.component';

@NgModule({
    declarations: [
        LayoutWinComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        //SearchesComponent
    ],
    imports: [CommonModule, RouterModule],
    exports: [LayoutWinComponent],
})
export class LayoutWinModule {}