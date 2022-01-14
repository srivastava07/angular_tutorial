import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.services';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  title = 'Update';
  public id:any="";
  public email:any="";
  public first_name:any=""
  public last_name:any=""
  public apiData:any="";
  public currentUserId:any = "";
  constructor(public http: HttpClient,public domSanitizer: DomSanitizer,private activeRoute: ActivatedRoute,public data:ServiceService, public route: Router) { 

}
ngOnInit(){
  this.currentUserId = this.activeRoute.snapshot.params["id"];
  console.log("this.currentUserId==>",this.currentUserId);
    this.getUserDetais(this.currentUserId);
    this.id= this.data.mobile.id;
       this.email= this.data.mobile.email;
       this.first_name= this.data.mobile.first_name;
       this.last_name= this.data.mobile.last_name;
}
getUserDetais(id:any){
      var rat= this.http.get("https://reqres.in/api/users/"+id);
     rat.subscribe((result:any) =>{
  
         // this.status = result.status;\
         this.apiData=result;
        console.log("data====>",result);
  
      },(err:any)=>{
        console.log("EROOR====>",err);
      });
    }
}