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
  availableBrands = this.miscellaneousService.getBrands();
  VehicleTypeReference = VehiculeType

  modelo : string = "";
  dominio : string = "";
  ingreso : string = "";
  marca : string = "";
  tipoVehiculo : undefined;



  sendForm(form : NgForm){
    if(form.valid)
    {

      const newVehiculo :  Vehicle = {
        modelo : form.value.modelo,
        dominio: form.value.dominio,
        ingreso : form.value.ingreso,
        marca : form.value.marcaSeleccionada,
        tipoVehiculo : form.value.tipoVehiculoSeleccionado,
        esDominioNuevo : form.value.esDominioNuevo
      
      }
      
      console.log('new Vehiculo' , newVehiculo)
      this.vehicleService.addVehicle(newVehiculo)
    }
    else {
      const formElement = document.querySelector('form');
      if(formElement){
        formElement.classList.add('was-validated')
      }
    }

  }

}
