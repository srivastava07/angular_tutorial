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
  public apiData:any="";
  public currentUserId:any = "";
  constructor(public http: HttpClient,public domSanitizer: DomSanitizer,private activeRoute: ActivatedRoute,public data:ServiceService, public route: Router) { 

}
ngOnInit(){
  this.currentUserId = this.activeRoute.snapshot.params["id"];
  console.log("this.currentUserId==>",this.currentUserId);
    this.getUserDetais(this.currentUserId);
}
getUserDetais(id:any){
      var rat= this.http.get("https://reqres.in/api/users/"+id);
     rat.subscribe((result:any) =>{
  
         // this.status = result.status;\
         this.apiData=result.data;
        console.log("data====>",result);
  
      },(err:any)=>{
        console.log("EROOR====>",err);
      });
    }
}