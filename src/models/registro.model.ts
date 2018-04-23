import { Select} from "ionic-angular";
import { DateTimeData } from "ionic-angular/util/datetime-util";

export interface Registro {

    key?: string;
    proyecto: Select;
    horas: number;
    minutos: number;
    fecha: DateTimeData;

}