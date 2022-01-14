import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  title = 'SecondProject';
  public email:any="";
  public psw:any=""
  public pswrepeat:any=""
  constructor(public data:ServiceService, public route: Router){}
  edit(){
    var edObj:any={email: this.email,psw: this.psw, pswrepeat: this.pswrepeat};
    console.log(edObj);
this.data.mobile=edObj;
  }
}