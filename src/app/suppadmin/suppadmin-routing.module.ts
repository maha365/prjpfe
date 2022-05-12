import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppadminComponent } from './suppadmin.component';

const routes: Routes = [
  {
    path:'',
    component:SuppadminComponent,
    children:[
      {
        path:'',
        redirectTo:'Dashboard',
        pathMatch:'full'

      },
      {
        path:'Dashboard',
        component:DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppadminRoutingModule { }
