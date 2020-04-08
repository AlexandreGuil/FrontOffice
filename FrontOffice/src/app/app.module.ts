import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarreComponent } from './nav-barre/nav-barre.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ModifCategorieComponent } from './modif-categorie/modif-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarreComponent,
    NavigationComponent,
    AuthentificationComponent,
    ModifCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
