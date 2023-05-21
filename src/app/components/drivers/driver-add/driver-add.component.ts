import { Component } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/model/driver.model';

@Component({
  selector: 'app-driver-add',
  templateUrl: './driver-add.component.html',
  styleUrls: ['./driver-add.component.css']
})
export class DriverAddComponent {
   driverobj : Driver= {id: '',firstName: '',lastName: '',email: '',phoneNumber: '' }

   constructor(private _driverServices:DriversService , private router:Router){}
   ngOnInit(): void {}
   
   AddDriver(){
    console.log(this.driverobj)
    this._driverServices.AddNewDriver(this.driverobj)
    .subscribe({
        next: (_driver) => {
     
          this.router.navigate(['/drivers']);
        }
      })
      
   }
}
