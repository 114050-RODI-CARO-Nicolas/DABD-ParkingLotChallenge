import { Component } from '@angular/core';
import { ParkingSlotRequestComponent } from "../parking-slot-form.component/parking-slot-form.component";
import { ParkingmapComponent } from "../parkingmap/parkingmap.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ParkingSlotRequestComponent, ParkingmapComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  currentView: string | null = null; // Puede ser 'form', 'map' o null para no mostrar ninguno al inicio

  // Funciones para mostrar el formulario o el mapa
  showForm() {
    this.currentView = 'form';
  }

  showMap() {
    this.currentView = 'map';
  }


}
