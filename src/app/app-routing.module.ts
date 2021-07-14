import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent
  },
  {
    path:'generos',
    component:IndiceGenerosComponent
  },
  {
    path:'actores',
    component:IndiceActoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
