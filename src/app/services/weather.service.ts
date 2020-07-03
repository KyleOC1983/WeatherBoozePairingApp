import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../weather/Interfaces/weather.interface';
import { Main } from '../weather/Interfaces/main.interfaces';
import { Sys } from '../weather/Interfaces/sys.interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http: HttpClient) { }
  

  getWeather(submit: number) : Observable<Response>{
      return this.http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${submit},us&appid=a904c2386a3e6d8c697e629baf45aa7e`).pipe(
      map((res: Response) => res)
  )}
}
