import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = 'SecondProject';
  
  name: any[] = [
    {"name": "abc","age":12},{"name": "def"}, {  "name": "ghi","age":92},{  "name": "jkl","age":20},{  "name": "mno","age":14}];
 
  }