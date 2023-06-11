import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auths/auth.service';
import { DataSegService } from '../../../services/data-seg.service';
import { IconService } from '../../../services/icon.service';
import { SpinnerComponent } from '../../../share/components/spinner/spinner.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    frmLogin !: UntypedFormGroup; jCredAcce: any = [];

    @ViewChild(SpinnerComponent) spnComp!: SpinnerComponent;

    constructor(private router: Router, private fb: UntypedFormBuilder, private toastr: ToastrService,
                public icoSrv: IconService,
                private dbsSrv: DataSegService, private auth: AuthService) {
    }

    get frm() { return this.frmLogin.controls; }

    ngOnInit() {
        this.router.events.subscribe((event) => { });

        this.formBuilder();
    }

    authenticate(){
        let email = this.frm['email'].value, password = this.frm['password'].value;
        this.spnComp.show();
        this.auth.authenticate({email, password}).subscribe((result) => {
            this.router.navigateByUrl('/');
            this.spnComp.hide();
        });
    }

    formBuilder(){
        this.frmLogin = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }
}