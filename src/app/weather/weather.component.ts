import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {HttpClient} from '@angular/common/http';

export interface Transaction {}


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  
  


  constructor(private httpClient: HttpClient) { }

  

  ngOnInit(): void {
    
  }

}



