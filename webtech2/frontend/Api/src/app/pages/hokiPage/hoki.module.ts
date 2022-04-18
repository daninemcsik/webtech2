import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHokiComponent } from './listHokiPage/list-hoki.component';
import { CreateHokiComponent } from './create-hoki/create-hoki.component';
import { HokiRoutingModule } from './hoki-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [ListHokiComponent, CreateHokiComponent],
  imports: [
    CommonModule,
    HokiRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HokiModule { }
