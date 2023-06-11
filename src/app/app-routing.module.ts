import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LayoutAuthComponent } from './core/layouts/layout-auth/layout-auth.component';
import { LayoutWinComponent } from './core/layouts/layout-win/layout-win.component';
//import { AuthGuardService } from './services/auths/auth-guard.service';

const routesComponent: Routes = [
    { //path: '56d25a65/:key',
        path: '56d25a65',
        loadChildren: () => import('./modules/tec/searches/searches.module').then((m) => m.SearchesModule),
    },
    {
        path: 'b58a2386/:key',
        loadChildren: () => import('./modules/tec/boletines/boletines.module').then((m) => m.BoletinesModule),
    },
    /*{
        path: 'b247c789/:key',
        loadChildren: () => import('./modules/seg/usuarios/usuarios.module').then((m) => m.UsuariosModule),
    },*/
    /*{
        path: 'login', pathMatch: 'full',
        loadChildren: () => import('./core/sessions/login/login.module').then((m) => m.LoginModule)
    },*/
];

/*const routesAuth: Routes = [
    {
        path: 'login', pathMatch: 'full',
        loadChildren: () => import('./core/sessions/login/login.module').then((m) => m.LoginModule)
    },
    {
        path: 'logout', pathMatch: 'full',
        loadChildren: () => import('./core/sessions/logout/logout.module').then((m) => m.LogoutModule)
    },
];*/
const routes: Routes = [
    {
        path: '', component: LayoutWinComponent, //canActivate: [AuthGuardService],
        children: routesComponent,
    },
    /*{
        path: '', component: LayoutAuthComponent,
        children: [
            {
                path: 'sessions',
                loadChildren: () => import('./core/sessions/login/login.module').then((m) => m.LoginModule),
            },
        ],
    },*/
    {
        path: '**',
        loadChildren: () => import('./core/not-found/not-found.module').then((m) => m.NotFoundModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}