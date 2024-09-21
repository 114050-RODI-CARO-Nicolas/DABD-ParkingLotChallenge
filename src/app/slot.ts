import { VehiculeType } from "./services/data/mock-parking.data";

export interface Slot {

    vehicules : VehiculeType[];
    availablePlaces : number;
    totalPlaces : number;
}
