import { Component, inject, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { VehiculeType } from '../services/data/mock-parking.data';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-parkingmap',
  standalone: true,
  imports: [],
  templateUrl: './parkingmap.component.html',
  styleUrl: './parkingmap.component.css'
})

export class ParkingmapComponent implements OnInit {

  parkingLot : any[] = [];

  private vehicleService = inject(VehiculoService);
  constructor() {}

  ngOnInit(): void {
   
    this.parkingLot = this.vehicleService.getParkingLotData();
    console.log('parkingmap.parkingLot ', this.parkingLot)
  }


  displayVehicleIcon(vehicleType: VehiculeType): string {
    //console.log('display Vehicle Icon. vehicleType: ', vehicleType)
    switch (vehicleType) {
      case VehiculeType.CAR:
        return 'A'; 
      case VehiculeType.MOTORCYCLE:
        return 'M';
      case VehiculeType.TRUCK:
        return 'C'; 
      default:
        return '?'; 
    }
  }

  displayVehicleRealIcon(vehicleType: VehiculeType): string {
    //console.log('display Vehicle Icon. vehicleType: ', vehicleType)
    switch (vehicleType) {
      case VehiculeType.CAR:
        return 'assets/icons/car-front.svg'; 
      case VehiculeType.MOTORCYCLE:
        return  'assets/icons/bicycle.svg';
      case VehiculeType.TRUCK:
        return  'assets/icons/truck.svg'; 
      default:
        return '?'; 
    }
  }

  

  






}
