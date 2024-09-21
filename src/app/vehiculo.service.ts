import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { PARKING_LOT } from './services/data/mock-parking.data';
import { VehiculeType } from './services/data/mock-parking.data';
import { Slot } from './slot';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private slotData : Slot[] = PARKING_LOT;

  constructor() { }

  getParkingLotData(){
    console.log("service.getParkingLotData, slotData ", this.slotData);
    return this.slotData;
  }

  getVehicleSize(vehicleType: VehiculeType | undefined): number {
    switch (vehicleType) {
      case VehiculeType.CAR:
        return 4;
      case VehiculeType.TRUCK:
        return 8; 
      case VehiculeType.MOTORCYCLE:
        return 1; 
      default:
        return 0;
    }
  }

  addVehicle(vehicle: Vehicle): void {
  
    const vehicleSize = this.getVehicleSize(vehicle.tipoVehiculo);
    console.log('vehiculoService.addVehicle() slotData ', this.slotData)
    //
    console.log("vehicle llega al service ", vehicle)
    for(let slot of this.slotData){
      console.log('vehicleSize ', vehicleSize);
      console.log('slot.availablePlaces ', slot.availablePlaces)
      if(slot.availablePlaces>=vehicleSize)
      {


        console.log('llega al if de slot.availablePlaces')
       
        //encontrar el indice del slot en la slotData para luego actualizar la slotData en ese indice con la copia actualizada
        const slotIndex = this.slotData.findIndex( s => s===slot);
        console.log('slotIndex ', slotIndex)
        if(slotIndex!=-1)
        {
          const slotCopy = {...slot};
          slotCopy.vehicules.push(vehicle.tipoVehiculo)
          slotCopy.availablePlaces -= vehicleSize;
          this.slotData[slotIndex]=slotCopy;
          break;
        }

      }
    }

  }

}

/*

 if(slot.availablePlaces>=vehicleSize)
      {
        slot.vehicules.push(vehicle.tipoVehiculo)
        slot.availablePlaces -= vehicleSize;
        break;
      } else {
        return;
      }

  */