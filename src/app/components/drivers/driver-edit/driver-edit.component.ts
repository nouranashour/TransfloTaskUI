import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';
import { Driver } from 'src/app/model/driver.model';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css']
})
export class DriverEditComponent implements OnInit {
  driverobj :  Driver= {id: '',firstName: '',lastName: '',email: '',phoneNumber: '' }
  constructor(private route:ActivatedRoute,private DriverService:DriversService,private router:Router){}
  ngOnInit(): void {
    console.log('update')
    this.route.paramMap.subscribe({
      next: (params) =>{
       const id = params.get('id');
       console.log(id);
       if(id){
        //call api
        this.DriverService.GetDriverById(id)
        .subscribe({
          next:(response)=>{
              this.driverobj = response;
          }
        })
       }
      }
    })
  }

  UpdateDriver(){
    console.log(this.driverobj);
    this.DriverService.EditDriver(this.driverobj)
    .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['']);
        },
        error:(response)=>{
          console.log(response);
        }
      })
   }
}
