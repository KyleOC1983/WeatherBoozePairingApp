import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {HttpClient} from '@angular/common/http';
import { WeatherService } from '../services/weather.service';
import { Weather } from './interfaces/weather.interface';
import { Sys } from './interfaces/sys.interfaces'
import { Main } from './interfaces/main.interfaces'
import { FormControl, Validators } from '@angular/forms';
import { UserStoreService } from '../user-store.service';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

export interface Transaction {}


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  animations: [fadeInOnEnterAnimation({anchor: 'enter', duration: 10000, delay: 200}), 
  fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200})]
})
export class WeatherComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  userEmail: string;
  submit: number;
  weather: Array<Weather>;
  sys: Sys;
  main: Main;
  

  constructor(private weatherService: WeatherService, private userStoreService: UserStoreService) { }

  search(){
    this.weatherService.getWeather(this.submit).subscribe((res: Object)=>{
      this.weather = res["weather"];
      this.main = res["main"];
      this.sys = res["sys"];
      
    })
  }
  addUserEmail(){
    this.userStoreService.addUserEmail(this.userEmail);
    console.log(this.userEmail)
  }
  

  ngOnInit(): void {
    this.userStoreService.userEmail$.subscribe(email=> this.userEmail = email)
  }

}




