import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { PARKING_LOT } from './services/data/mock-parking.data';
import { VehiculeType } from './services/data/mock-parking.data';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private vehicleList : Vehicle[] = [];

  constructor() { }

  getParkingLotData(){
    return PARKING_LOT;
  }

  getVehicleSize(vehicleType: VehiculeType | undefined): number {
    switch (vehicleType) {
      case VehiculeType.CAR:
        return 2;
      case VehiculeType.TRUCK:
        return 8; 
      case VehiculeType.MOTORCYCLE:
        return 1; 
      default:
        return 0;
    }
  }

  addVehicle(vehicle: Vehicle): boolean {
    const vehicleSize = this.getVehicleSize(vehicle.tipoVehiculo);
    const parkingLot = this.getParkingLotData();
    for (const slot of parkingLot) {
      if (slot.availablePlaces >= vehicleSize) {
        slot.vehicules.push(vehicle.tipoVehiculo);
        slot.availablePlaces -= vehicleSize;
        this.vehicleList.push(vehicle);
        return true; 
      }
    }
    return false; 
  }

}
