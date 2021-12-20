import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(public router1:Router){
    
  }
  title = 'SecondProject';
 
  goToCart(){
    this.router1.navigate(['/cart']);
      }
}