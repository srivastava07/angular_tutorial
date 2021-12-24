import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  title = 'SecondProject';
  router: any;
  public userArray :any = false;
  public test:any= true;
public abc:any="varuna";
public xyz:any="Srivastava";
public fullName:any;
  constructor(public http:HttpClient , public services:CommonService){

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
  ngOnInit(){
this.test=this.services.serve;
this.services.serve=12;
this.fullName=this.services.getFullname(this.abc,this.xyz)

  }
  
  
}