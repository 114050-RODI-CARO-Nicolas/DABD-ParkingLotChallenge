import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../vehicle';
import { NgForm } from '@angular/forms';
import { VehiculoService } from '../vehiculo.service';
import { MiscellaneousService } from '../services/data/miscellaneous.service';
import { VehiculeType } from '../services/data/mock-parking.data'; 
@Component({
  selector: 'app-parking-slot-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parking-slot-form.component.html',
  styleUrl: './parking-slot-form.component.css',
})
export class ParkingSlotRequestComponent {
  
  private vehicleService = inject(VehiculoService);
  private miscellaneousService = inject(MiscellaneousService);
  //@Output() newVehicleAdded = new EventEmitter<void>();




  vehiculo : Vehicle = new Vehicle();

  availableBrands = this.miscellaneousService.getBrands();
  VehicleTypeReference = VehiculeType

  sendForm(form : NgForm){
    if(form.valid)
    {
      console.log('vehiculo at sendForm ', this.vehiculo)
      this.vehicleService.addVehicle(this.vehiculo)
      //this.newVehicleAdded.emit();
      
      
    }

  }

}
