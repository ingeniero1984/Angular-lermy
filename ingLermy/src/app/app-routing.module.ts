  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},

  { path: 'inicio', loadChildren: () => import('./components/pages/inicio/inicio.module')
  .then(m => m.InicioModule) },
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'tecnology', loadChildren: () => import('./components/pages/tecnology/tecnology.module').then(m => m.TecnologyModule) },
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'proyects', loadChildren: () => import('./components/pages/proyects/proyects.module').then(m => m.ProyectsModule) },
  { path: 'others', loadChildren: () => import('./components/pages/others/others.module').then(m => m.OthersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
