import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParkingSlotRequestComponent } from "./parking-slot-form.component/parking-slot-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParkingSlotRequestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parking-lot';
}
