import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  constructor() { }
  getdetails(cityname:string){
    let url ='https://api.openweathermap.org/data/2.5/weather?appid=8f9164d0bb1a347b51a7d0e25e247b6c&q=${cityname}&units=metric'
    return fetch(url)
  }
}
