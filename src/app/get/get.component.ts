import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {
  title = 'SecondProject';
  public apiData:any=""
  constructor(public http: HttpClient,public domSanitizer: DomSanitizer) { 

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
}