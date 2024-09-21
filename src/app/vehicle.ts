import { VehiculeType } from "./services/data/mock-parking.data";

export interface Vehicle {

    modelo : string;
    dominio : string; 
    ingreso : string;
    marca : string; 
    tipoVehiculo: VehiculeType; 
    esDominioNuevo : boolean 


}
