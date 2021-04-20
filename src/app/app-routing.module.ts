import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuard } from './services/auth.guard';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precio', component: PreciosComponent },
  { path: 'protegida', component: ProtegidaComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch:'full', redirectTo: 'home' },
  { path: '', pathMatch:'full', redirectTo: 'home' }
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
