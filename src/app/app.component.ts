import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  data:any =[
    {checked:true, value:1 , name:'impressions'},
    {checked:true, value:2 , name:'clicks'},
    {checked:true, value:3 , name:'avg.cpc'},
    {checked:true, value:4 , name:'conversions'},
    {checked:true, value:5 , name:'spent'},
    {checked:true, value:6 , name:'cr'},
    {checked:true, value:7 , name:'saleamount'},



   ]







  ngOnInit(): void {


  }
  ngOnChanges() {
    

    this.data.map((item: {checked:any , value:number ;}) =>
    {
      if(item.checked)
      {
        item.value=1;
      }
      else
      {
        item.value=0 ;
      }
    })


  }




}
