import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarreComponent } from './nav-barre/nav-barre.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { PanierFinalComponent } from './panier-final/panier-final.component';


const routes: Routes = [
{path : 'authentification', component: AuthentificationComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
