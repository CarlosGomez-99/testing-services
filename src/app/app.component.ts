import { Component, OnInit } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const calculator = new Calculator();
    console.log(calculator.add(1, 2));
    console.log(calculator.subtract(1, 2));
    console.log(calculator.multiply(1, 2));
    console.log(calculator.divide(1, 2));
    
  }
  title = 'testing-services';
}
