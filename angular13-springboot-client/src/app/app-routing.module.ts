import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";

const routes : Routes = [
  {path : '' , redirectTo :'employees' , pathMatch:'full'},
  {path:'employees' , component:EmployeeListComponent},
  {path:'add' , component:CreateEmployeeComponent},
  {path:'update/:id' , component:UpdateEmployeeComponent},
  {path:'details/:id' , component:EmployeeDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
