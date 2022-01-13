import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModule } from '../../Shared/nz/nz.module';

import { AjouterBeneficiaireRoutingModule } from './ajouter-beneficiaire-routing.module';
import { AjouterBeneficiaireComponent } from './ajouter-beneficiaire.component';


@NgModule({
  declarations: [
    AjouterBeneficiaireComponent
  ],
  imports: [
    NzModule,
    CommonModule,
    AjouterBeneficiaireRoutingModule
  ]
})
export class AjouterBeneficiaireModule { }
