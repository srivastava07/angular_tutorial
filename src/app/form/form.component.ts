import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
      public fname:any="";
public lname:any="";
public fullName:any="";
 
  title = 'SecondProject';

  getDetails(){
    console.log(this.fname);
    console.log(this.lname);
    }
}