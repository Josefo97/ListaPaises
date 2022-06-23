import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisComponent } from './components/pais/pais.component';

const routes: Routes = [
  { path: 'paises', component: PaisesComponent },
  { path: 'pais/:id', component: PaisComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'paises' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
