import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjudaRoutingModule } from './ajuda-routing.module';
import { AjudaComponent } from './ajuda.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AjudaComponent],
  imports: [
    CommonModule,
    AjudaRoutingModule,
    SharedModule,
  ]
})
export class AjudaModule { }
