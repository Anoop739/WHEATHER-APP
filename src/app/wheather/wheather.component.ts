import { Component, OnInit } from '@angular/core';
import { WheatherService } from '../service/wheather.service';
@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent  {
 cityname:string=''
 result:any=""
  constructor(private service:WheatherService) {}
  getwheather(){
    console.log(this.cityname)
    this.service.getdetails(this.cityname).then(res=>res.json()).then(data=>this.result=data
    )
    console.log(this.result);
   
   
    
    
    

  }

 

}
