import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'department',component: DepartmentListComponent},
  {path:'addDepartment', component:DepartmentAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
