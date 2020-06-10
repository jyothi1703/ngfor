import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Jyothi App';
  Employees = [
              {empname : 'Anitha' , department : 'IT' },
              {empname : 'Ravi' , department : 'Services' },
              {empname : 'Arjun' , department : 'QA' },
              {empname : 'Pooja' , department : 'Testing' },
              {empname : 'Preetham' , department : 'Admin' },
              {empname : 'Rajesh' , department : 'Managment' },
              {empname : 'Suraj' , department : 'Developer' },
              {empname : 'Ankith' , department : 'IT' }
  ]
}
