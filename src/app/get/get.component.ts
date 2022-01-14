import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.services';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {
  title = 'Get';
  public id:any="";
  public email:any="";
  public first_name:any=""
  public last_name:any=""
  public apiData:any=""
  constructor(public http: HttpClient,public domSanitizer: DomSanitizer,public router: Router,public data:ServiceService) { 

}
ngOnInit(){
    this.getStatus();
}
  getStatus(){
      var rat= this.http.get("https://reqres.in/api/users?page=1");
     rat.subscribe((result:any) =>{
  
         // this.status = result.status;\
         this.apiData=result;
        console.log("data====>",result);
  
      },(err:any)=>{
        console.log("EROOR====>",err);
      });
      
    }

    goToUpdate(id:any){
      var obj:any={email: this.apiData.data.email, id: this.id, first_name: this.first_name, last_name:this.last_name};
      this.data.mobile=obj;
      console.log(obj);
      this.router.navigate(["update/"+id]);// update/4
    }
}