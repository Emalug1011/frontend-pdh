import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintanceProfileRoutingModule } from './maintance-profile-routing.module';
import { MaintanceProfileComponent } from './maintance-profile.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        MaintanceProfileRoutingModule,
        SharedModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [MaintanceProfileComponent]
})
export class MaintanceProfileModule { }
