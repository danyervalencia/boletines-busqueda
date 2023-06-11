import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/share/components/spinner/spinner.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, SpinnerModule,
        LoginRoutingModule, 
    ],
    /*exports: [LoginComponent],*/
})
export class LoginModule {}