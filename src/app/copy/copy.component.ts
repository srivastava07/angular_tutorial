import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.services';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent {
  title = 'Copy';
  public email:any="";
  public psw:any=""
  public pswrepeat:any=""
  
   constructor(public data:ServiceService, public route: Router){}
   ngOnInit(){
       this.email= this.data.mobile.email;
       this.psw= this.data.mobile.psw;
       this.pswrepeat= this.data.mobile.pswrepeat;
   }
}