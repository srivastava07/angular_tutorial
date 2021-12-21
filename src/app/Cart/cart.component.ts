import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  title = 'SecondProject';
  router: any;
  public userArray :any = false;

  constructor(public http:HttpClient){

  }



  getDataFunction(){
    this.http.get("https://reqres.in/api/users?page=2").subscribe((result:any) =>{
      if(result.data != undefined && result.data.length > 0){
        this.userArray = result.data;
        console.log(this.userArray);
      }
    },(err:any)=>{
      console.log("EROOR====>",err);
    })
  }
  
}