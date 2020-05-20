import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule,HttpRequest } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {MatTableDataSource} from '@angular/material/table';

import {Employee} from "../models/employee";
import {AppComponent} from "../app.component";
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(public http: HttpClient) { }

  employeeList:Employee[]; 
  
  //creating new form fields
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    address: new FormControl(''),
    company: new FormControl('')
  });

  //initializing values to form fields before entered by user
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      firstName: '',
      lastName: '',
      mobile: '',
      address: '',
      company: ''
    });
  }

  //update form values at the time of updating employee
  updateEmployee(employee) {
    this.form.setValue({
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      mobile: employee.mobile,
      address: employee.address,
      company: employee.company
    });
  }

  //function for getting all the employees through backend call
  public getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(AppComponent.API_URL+"/allEmployee");
  }

  //inserting the new employee in db thorugh backend logic
  public insertEmployee(employee) {

    return this.http.post(AppComponent.API_URL+"/employeeSave",employee);
  };
  
  //function for deleting the new employee
  deleteEmployee(employee) {
    return this.http.post(AppComponent.API_URL+"/deleteEmployee",employee);
  }

  //entering the prefilled employee data before editing employee
  populateForm(employee) {
    this.form.patchValue(_.omit(employee));
  }

}
