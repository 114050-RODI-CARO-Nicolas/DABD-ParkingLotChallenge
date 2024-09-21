import { VehiculeType } from "./services/data/mock-parking.data";

export class Vehicle {

    modelo : string = "";
    dominio : string = "";
    ingreso : string = new Date().toLocaleDateString();
    marcaSeleccionada : string = "";
    tipoVehiculoSeleccionado : string = "";
    tipoVehiculo: VehiculeType.CAR | undefined;
    esDominioNuevo : boolean = false;


}
