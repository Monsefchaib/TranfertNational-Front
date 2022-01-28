import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficherTransfertsComponent } from './afficher-transferts/afficher-transferts.component';
import { RouterModule, Routes } from '@angular/router';
import { NzModule } from 'src/app/Shared/nz/nz.module';
import { AjouterTransfertComponent } from './ajouter-transfert/ajouter-transfert.component';
import { BloquerTransfertComponent } from './bloquer-transfert/bloquer-transfert.component';

const routes: Routes = [
  {path : "all" , component : AfficherTransfertsComponent},
  {path : "add" , component : AjouterTransfertComponent},
  {path : "bloquer" , component : BloquerTransfertComponent},

];

@NgModule({
  declarations: [
    AfficherTransfertsComponent,
    AjouterTransfertComponent,
    BloquerTransfertComponent
  ],
  imports: [
    NzModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TransfertModule { }
