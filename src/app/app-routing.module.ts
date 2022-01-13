import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'ajouterTransfert', loadChildren: () => import('./pages/ajouter-transfert/ajouter-transfert.module').then(m => m.AjouterTransfertModule) },
  { path: 'ajouterBeneficiaire', loadChildren: () => import('./pages/ajouter-beneficiaire/ajouter-beneficiaire.module').then(m => m.AjouterBeneficiaireModule) },
  { path: 'searchClient', loadChildren: () => import('./pages/chercherClient/search-client/search-client.module').then(m => m.SearchClientModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
