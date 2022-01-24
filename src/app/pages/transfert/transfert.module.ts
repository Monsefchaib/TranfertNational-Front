import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficherTransfertsComponent } from './afficher-transferts/afficher-transferts.component';
import { RouterModule, Routes } from '@angular/router';
import { NzModule } from 'src/app/Shared/nz/nz.module';
import { AjouterTransfertComponent } from './ajouter-transfert/ajouter-transfert.component';

const routes: Routes = [
  {path : "all" , component : AfficherTransfertsComponent},
  {path : "add" , component : AjouterTransfertComponent},


];

@NgModule({
  declarations: [
    AfficherTransfertsComponent,
    AjouterTransfertComponent
  ],
  imports: [
    NzModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TransfertModule { }
