import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {Router} from "@angular/router";

import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})

//for popup  on edit employee

export class EmployeeEditComponent implements OnInit {

  constructor( 
    public service: EmployeeServiceService,
    public dialogRef: MatDialogRef<EmployeeEditComponent>,
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
    if (this.service.form.valid && confirm('Are you sure to make these changes ?')) {
    
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
