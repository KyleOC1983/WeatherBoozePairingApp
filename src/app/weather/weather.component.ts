import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {HttpClient} from '@angular/common/http';
import { WeatherService } from '../services/weather.service';
import { Weather } from './interfaces/weather.interface';
import { Sys } from './interfaces/sys.interfaces'
import { Main } from './interfaces/main.interfaces'

export interface Transaction {}


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  submit: number;
  weather: Array<Weather>;
  sys: Sys;
  main: Main;
  

  constructor(private weatherService: WeatherService) { }

  search(){
    this.weatherService.getWeather(this.submit).subscribe((res: Object)=>{
      this.weather = res["weather"];
      this.main = res["main"];
      this.sys = res["sys"];
      
    })
  }

  

  ngOnInit(): void {
    
  }

}



