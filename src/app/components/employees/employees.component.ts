import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {Router} from "@angular/router";

import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

//for popup  on add employee

export class EmployeesComponent implements OnInit {

  constructor( 
    public service: EmployeeServiceService,
    public dialogRef: MatDialogRef<EmployeesComponent>,
    private router: Router)
    { }

  ngOnInit(): void {
    this.service.getAllEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }


  onSubmit() {
    if (this.service.form.valid) {
    
        this.service.insertEmployee(this.service.form.value).
        subscribe(data=>{

          const values = Object["values"](data);
          if(values[0] == "Success") {
            this.service.form.reset();
            this.service.initializeFormGroup();
            this.onClose();
            this.dialogRef.afterClosed().subscribe(() => { this.service.getAllEmployees(); } );
          }

        });
      
    
    }
    
    
    
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
