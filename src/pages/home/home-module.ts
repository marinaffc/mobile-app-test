import { NgModule } from '@angular/core';
import { CleaningComponent } from './cleaning/cleaning';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [CleaningComponent],
    imports: [ IonicPageModule.forChild(CleaningComponent),
    ],
    exports: [CleaningComponent]
})
export class HomeModule { }