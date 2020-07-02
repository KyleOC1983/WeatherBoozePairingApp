import { Weather } from './weather.interface';
import { Main } from './main.interfaces';
import { Sys } from './sys.interfaces';


export interface WeatherKeys{
    
    weather: Array<Weather>,
    main: Array<Main>,
    wind: number,
    sys: Array<Sys>,

}