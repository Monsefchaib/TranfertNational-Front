import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficherTransfertsComponent } from './afficher-transferts/afficher-transferts.component';
import { RouterModule, Routes } from '@angular/router';
import { NzModule } from 'src/app/Shared/nz/nz.module';

const routes: Routes = [
  {path : "all" , component : AfficherTransfertsComponent},

];

@NgModule({
  declarations: [
    AfficherTransfertsComponent
  ],
  imports: [
    NzModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TransfertModule { }
