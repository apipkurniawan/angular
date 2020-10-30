import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  valueButtons: string[] = [];
  previousOperand = '0';
  currentOperand = '0';

  constructor() { }

  ngOnInit(): void { }

  getNumberValue(e: string) {
    if (this.currentOperand !== '0') {
      this.valueButtons = [this.currentOperand];
      this.valueButtons.push(e);
      this.currentOperand = this.valueButtons.join('');
    } else {
      this.valueButtons.push(e);
      this.currentOperand = this.valueButtons.join('');
    }
  }

  allClear() {
    this.valueButtons = [];
    this.previousOperand = '0';
    this.currentOperand = '0';
  }

  deleteLastNum() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }
}
