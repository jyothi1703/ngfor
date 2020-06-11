import { Component } from '@angular/core';
import { EmpInterface } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements EmpInterface{
  public empname : string;
  public department : string;
  public num : number;
  Employees : EmpInterface [] = [
              {empname : 'Anitha' , department : 'IT' , num : 7893999401 },
              {empname : 'Ravi' , department : 'Services',num : 7893999401},
              {empname : 'Arjun' , department : 'QA',num : 7893999401},
              {empname : 'Pooja' , department : 'Testing',num : 7893999401 },
              {empname : 'Preetham' , department : 'Admin',num : 7893999401 },
              {empname : 'Rajesh' , department : 'Managment',num : 7893999401 },
              {empname : 'Suraj' , department : 'Developer',num : 7893999401 },
              {empname : 'Ankith' , department : 'IT',num : 7893999401 }
  ]
}
