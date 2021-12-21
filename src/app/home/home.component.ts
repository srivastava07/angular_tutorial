import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public demoVariable:any = "gaurav";
  public demoVariable1:any = "varuna";
  public isShown:any= false;
  toggle(){
    this.isShown = !this.isShown;
  }
  public arr:any=[{key:"val",model:"500"},{key:"fly",model:"kylie"}];
}