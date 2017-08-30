import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NgClassComponent } from './ng-class.component';

const NgClassRouteng: Routes = [
    {path: 'class',component: NgClassComponent}
]

//export const NgClassRouting = RouterModule.forRoot(NgClassRouteng);
export const NgClassRouting: ModuleWithProviders = RouterModule.forChild(NgClassRouteng);