import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { VipGuard } from './vip.guard';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'store', component: StoreComponent, canActivate: [VipGuard]},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
