import { Component, OnInit, ViewChild } from '@angular/core';

import {Employee} from "../../models/employee";
import {EmployeeServiceService} from "../../services/employee-service.service";
import {EmployeesComponent} from "../../components/employees/employees.component";
import {EmployeeEditComponent} from "../../components/employee-edit/employee-edit.component";

import {Router} from "@angular/router";
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  element1: Employee [];
  errorMessage: string;
  datasource = [];

  //defining columns of table

  displayedColumns: any[] = ['firstName', 'lastName', 'address', 'company', 'mobile','actions'];
  listData: MatTableDataSource<any>;

  constructor(public employeeService: EmployeeServiceService, 
    public router: Router,
    private dialogue: MatDialog) {
  }

  //get all employees data on page load

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data : Employee []) => { 

        this.listData = new MatTableDataSource(data);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
      
  }

  //add employee on button click

  addEmployee(): void {
    this.employeeService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialogue.open(EmployeesComponent,dialogConfig);
  }

  //edit employee on button click

  onEdit(row){
    this.employeeService.populateForm(row);
    this.employeeService.updateEmployee(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialogue.open(EmployeeEditComponent,dialogConfig);
  }

  //delete employee on button click

  onDelete(row){
    if(confirm('Are you sure to make these changes ?')){
      this.employeeService.deleteEmployee(row).subscribe(
        (data) => { 
  
          console.log(data);
        }, err => {
          console.log(err);
          this.errorMessage = "username already exist";
        }
      )
    }
  }

  //update employee on button click

  updateEmployee(row){
    if(confirm('Are you sure to make these changes ?')){
      this.employeeService.deleteEmployee(row).subscribe(
        (data) => { 
  
          console.log(data);
        }, err => {
          console.log(err);
          this.errorMessage = "username already exist";
        }
      )
    }
  }

}
