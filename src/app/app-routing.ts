import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';

const appRoutes: Routes = [
    {path: 'if',component: NgIfComponent},
    {path: 'for',component: NgForComponent},
    {path: 'class', loadChildren: 'app/ng-class/ng-class.module#NgClassModule'},

    {
        path: '',
        redirectTo: 'if',
        pathMatch: 'full'
    }
    /*{ path: '**', component: PageNotFoundComponent }*/
];

export const RoutingModule = RouterModule.forRoot(appRoutes);
