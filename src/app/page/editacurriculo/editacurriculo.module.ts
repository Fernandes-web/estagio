import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditacurriculoPageRoutingModule } from './editacurriculo-routing.module';

import { EditacurriculoPage } from './editacurriculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditacurriculoPageRoutingModule
  ],
  declarations: [EditacurriculoPage]
})
export class EditacurriculoPageModule {}
