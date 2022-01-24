import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NzModule } from 'src/app/Shared/nz/nz.module';
import { AfficherBeneficiairesComponent } from './afficher-beneficiaires/afficher-beneficiaires.component';


const routes: Routes = [
  {path : "all" , component : AfficherBeneficiairesComponent},

];

@NgModule({

  imports: [
    NzModule,
    RouterModule.forChild(routes),
    CommonModule
  ],

  declarations: [
     AfficherBeneficiairesComponent

  ]
})
export class BeneficiairesModule { }
