import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptDataAddComponent } from './dept-data-add/dept-data-add.component';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';


const routes: Routes = [
  {path:'',component: DepartmentListComponent},
  {path:'addDepartment', component:DepartmentAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
