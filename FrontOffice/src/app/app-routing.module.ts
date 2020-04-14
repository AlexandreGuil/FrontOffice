import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarreComponent } from './nav-barre/nav-barre.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { PanierFinalComponent } from './panier-final/panier-final.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
  {path : 'authentification', component: AuthentificationComponent},

  {path : 'inscription', component: InscriptionComponent},
  
  {path : 'panier', component: PanierFinalComponent},

  {path : 'categories', component : ModifCategorieComponent},
  
  {path : 'navigation',  component: NavigationComponent, children:[
    { path :'panier', component: PanierFinalComponent}
  
  ]
  
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
