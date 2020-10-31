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
  resultOperand = '0';
  operation: string;

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

  equalsBtn() {
    this.compute();
    this.clearCurrentOperand();
  }

  operationBtn(e: string) {
    this.operation = e;
    if (this.previousOperand === '0') {
      this.previousOperand = this.currentOperand;
    }
    this.clearCurrentOperand();
  }

  compute() {
    switch (this.operation) {
      case 'x':
        this.previousOperand = (Number(this.currentOperand) * Number(this.previousOperand)).toString();
        break;
      case '÷':
        this.previousOperand = (Number(this.previousOperand) / Number(this.currentOperand)).toString();
        break;
      case '+':
        this.previousOperand = (Number(this.currentOperand) + Number(this.previousOperand)).toString();
        break;
      case '-':
        this.previousOperand = (Number(this.previousOperand) - Number(this.currentOperand)).toString();
        break;
      default:
        break;
    }
  }

  clearCurrentOperand() {
    this.valueButtons = [];
    this.currentOperand = '0';
  }
  allClear() {
    this.clearCurrentOperand();
    this.previousOperand = '0';
  }
  deleteLastNum() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }
}
