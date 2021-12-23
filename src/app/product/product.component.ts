import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(public http: HttpClient){
  }
  title = 'SecondProject';
  public status :any =   '';
  public arrayVAR:any = [];
  public arrayOBJ= {first: "GAURAV",sec: "IS DADDY OF", third: "VARUNA SRIVASTAVA" };

  ngOnInit() {
    this.prepareArray();
  }

  prepareArray(){
    for (let index = 1; index < 11; index++) {
      this.arrayVAR.push(6*index);      
    }
  }

  getStatus(){
    this.http.get("https://6149c97007549f001755a5ca.mockapi.io/agent").subscribe((result:any) =>{


      this.status = result.status;
      console.log("data====>",result);

    },(err:any)=>{
      console.log("EROOR====>",err);
    });
  }

  
}