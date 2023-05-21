import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DriverListComponent} from './components/drivers/driver-list/driver-list.component'
import {DriverAddComponent} from './components/drivers/driver-add/driver-add.component'
import { DriverEditComponent } from './components/drivers/driver-edit/driver-edit.component';
const routes: Routes = [
  { path:'', 
   component: DriverListComponent
  } ,
  { 
  path:'drivers', 
   component: DriverListComponent
  },
  {
    path:'drivers/add', 
   component: DriverAddComponent
  
  },
  {
    path:'driver/edit/:id',
   component: DriverEditComponent
  
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
