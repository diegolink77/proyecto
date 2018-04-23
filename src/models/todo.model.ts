import { Select} from "ionic-angular";
import { DateTimeData } from "ionic-angular/util/datetime-util";

export interface Tarea {

    key?: string;
    unidad: Select;
    proyecto: Select;
    horas: number;
    minutos: number;
    fecha: DateTimeData;
    
}