import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.services';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = 'SecondProject';
  public email:any="";
  public psw:any=""
  public pswrepeat:any=""
  
   constructor(public data:ServiceService, public route: Router){}
  signup(){
var obj:any={email: this.email,psw: this.psw, pswrepeat: this.pswrepeat};
  
console.log(obj);
this.data.mobile=obj;
this.route.navigate(['/copy']);
  }
}