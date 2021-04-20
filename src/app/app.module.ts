import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

// Import the module from the SDK - Importaciones de auth0
import { AuthModule } from '@auth0/auth0-angular';
import { LoginAuthComponent } from './components/login-auth/login-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    LoginAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-z9r71894.us.auth0.com',
      clientId: 'wmHsmh6WEVWUdSEd0U756UnBAFUGP6QY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
