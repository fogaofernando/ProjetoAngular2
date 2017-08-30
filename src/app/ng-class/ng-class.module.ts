import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgClassComponent } from './ng-class.component';
import { NgClassRouting } from './ng-class.routing';


@NgModule({
    imports: [
        CommonModule,
        NgClassRouting
    ],
    declarations: [
        NgClassComponent
    ]
})

export class NgClassModule {
}
