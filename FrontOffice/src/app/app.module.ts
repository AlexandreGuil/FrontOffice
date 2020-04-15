<<<<<<< HEAD

=======
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from 'src/service/client.service';
>>>>>>> ca0d0ffc813109158959657e5e336f160011ff91
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarreComponent } from './nav-barre/nav-barre.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';
import { PanierFinalComponent } from './panier-final/panier-final.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
<<<<<<< HEAD
import { InscriptionService } from 'src/services/inscription.service';
import { HttpClientModule } from '@angular/common/http';
=======
import { HomeComponent } from './home/home.component';

>>>>>>> ca0d0ffc813109158959657e5e336f160011ff91



@NgModule({
  declarations: [
    AppComponent,
    NavBarreComponent,
    NavigationComponent,
    AuthentificationComponent,
    ModifCategorieComponent,
    PanierFinalComponent,
    InscriptionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [InscriptionService],
=======
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [ClientService],
>>>>>>> ca0d0ffc813109158959657e5e336f160011ff91
  bootstrap: [AppComponent]
})
export class AppModule { }
