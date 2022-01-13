import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterBeneficiaireComponent } from './ajouter-beneficiaire.component';

const routes: Routes = [{ path: '', component: AjouterBeneficiaireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterBeneficiaireRoutingModule { }
