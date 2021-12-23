import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  title = 'SecondProject';
  constructor(){
    
  }
  public userNumb:any = 2;
  public isDisplay:any= false;
  switch(){
    this.isDisplay = !this.isDisplay;
  }
  public tableNum:any=5;
  }



  