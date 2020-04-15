
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarreComponent } from './nav-barre/nav-barre.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { PanierFinalComponent } from './panier-final/panier-final.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionService } from 'src/services/inscription.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavBarreComponent,
    NavigationComponent,
    AuthentificationComponent,
    ModifCategorieComponent,
    PanierFinalComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [InscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
