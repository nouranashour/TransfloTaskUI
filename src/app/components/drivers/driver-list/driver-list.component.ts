import { Component } from '@angular/core';
import { Driver } from 'src/app/model/driver.model';
import { ApiResponse } from 'src/app/model/ApiResponse';
import { DriversService } from 'src/app/services/drivers.service';
import { AlphabetizenameDialogComponent } from 'src/app/components/alphabetizename-dialog/alphabetizename-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent {
  drivers : Driver[] = [] ;
  data:any ;
  constructor(private driversService: DriversService , private matDialog : MatDialog){}
 
  ngOnInit(): void {
    this.driversService.GetAllDrivers()
    .subscribe({
      next:(_drivers)=>{
        this.drivers= _drivers;
      },
      error:(response)=>{
        console.log(response);
      }
  })
}

Delete_Driver(id: any) { 
  this.driversService.DeleteDriver(id)
  .subscribe(aa => { this.driversService.GetAllDrivers()
    .subscribe(_drivers=> { this.drivers= _drivers })}) }
    
InsertBulk(){ 
      this.driversService.InsertBulk('100')
      .subscribe(aa => { this.driversService.GetAllDrivers()
        .subscribe(_drivers=> { this.drivers= _drivers })}) 
}

AlphabetizeDrivers(){
  
  this.driversService.GetAlphapetizeDrivers()
  .subscribe({
      next:(_drivers)=>{
        this.drivers= _drivers;

      },
      error:(response)=>{
        console.log(response);
      }
  })
}    
}

