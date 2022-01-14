import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{
   constructor(){}
   employees:Employee[]=[{
    id: 1,
    name: 'Mark',
    gender: 'M' ,
    email: 'mark@gmail.com',
    department: 'IT',
    dateOfBirth: new Date('10/25/1998'),
    isActive: true
   },
   {
    id: 11,
    name: 'Kartik',
    gender: 'M' ,
    email: 'kartark@gmail.com',
    department: 'HR',
    dateOfBirth: new Date('11/5/1989'),
    isActive: true
   },
   {
    id: 2,
    name: 'Riya',
    gender: 'F' ,
    email: 'riya@gmail.com',
    department: 'SE',
    dateOfBirth: new Date('08/19/1980'),
    isActive: true
   }
];
    ngOnInit() {
       
    }


}