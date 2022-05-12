import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { SuppadminModule } from './suppadmin/suppadmin.module';

const routes: Routes = [
  {
    path:'Connecter',
    loadChildren:()=>import('./login/login.module').then(m=>LoginModule)
  },
 
  {
    path:'SupAdmin',
    loadChildren:()=>import('./suppadmin/suppadmin.module').then(m=>SuppadminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
