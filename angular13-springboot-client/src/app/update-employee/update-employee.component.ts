import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  // @ts-ignore
  id: number;
  // @ts-ignore
  employee: Employee;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(
      data => {console.log(data),
      this.employee = data ;
      },
      error => {
        console.log(error);
      }
    )
  }

  onSubmit(){
    this.updateEmployee();
  }

  goToList(){
    this.router.navigate(['/employees'])
  }

  public updateEmployee() {
    this.employeeService.updateEmployee(this.id , this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.goToList();
      }, error => console.log(error));
  }


}
