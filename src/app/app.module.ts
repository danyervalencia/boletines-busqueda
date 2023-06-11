import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutAuthModule } from './core/layouts/layout-auth/layout-auth.module';
import { LayoutWinModule } from './core/layouts/layout-win/layout-win.module';

import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAr);

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
        HttpClientModule, AppRoutingModule, LayoutAuthModule, LayoutWinModule,
        ToastrModule.forRoot({ closeButton: true }),
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'es-AR'}],
    bootstrap: [AppComponent]
})
export class AppModule { }