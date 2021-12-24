import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(public http: HttpClient, public services:CommonService){
  }
  title = 'SecondProject';
  public status :any =   '';
  public arrayVAR:any = [];
  public arrayOBJ= {first: "GAURAV",sec: "IS DADDY OF", third: "VARUNA SRIVASTAVA" };
  public test:any= true;
  public abc1:any="varuna";
public xyz1:any="Srivastava";
public fullName:any;

  ngOnInit() {
    this.prepareArray();
    this.test=this.services.serve;
    this.services.serve=99;
    this.fullName=this.services.getFullname(this.abc1,this.xyz1)
  }

  prepareArray(){
    for (let index = 1; index < 11; index++) {
      this.arrayVAR.push(6*index);      
    }
  }

  getStatus(){
    var rat= this.http.get("https://6149c97007549f001755a5ca.mockapi.io/agent");
   rat.subscribe((result:any) =>{


      this.status = result.status;
      console.log("data====>",result);

    },(err:any)=>{
      console.log("EROOR====>",err);
    });
  }
 
    
      
  
}