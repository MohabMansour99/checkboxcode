import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  data:any =[
    {checked:false, value:0 , name:'impressions'},
    {checked:false, value:0 , name:'clicks'},
    {checked:false, value:0 , name:'avg.cpc'},
    {checked:false, value:0 , name:'conversions'},
    {checked:false, value:0 , name:'spent'},
    {checked:false, value:0 , name:'cr'},
    {checked:false, value:0 , name:'saleamount'},



   ]







  ngOnInit(): void {


  }
  ngOnChanges() {
    console.log(this.data);

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
