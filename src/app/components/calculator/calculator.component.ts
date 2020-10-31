import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [MessageService]
})
export class CalculatorComponent implements OnInit {
  valueButtons: string[] = [];
  previousOperand = '0';
  currentOperand = '0';
  displayDecimal = '';
  operation: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void { }

  getNumberValue(e: string) {
    if (this.currentOperand !== '0') {
      this.valueButtons = [this.currentOperand];
    }
    if (e === '.') {
      if (!this.currentOperand.includes('.')) {
        this.valueButtons.push(e);
      }
    } else {
      this.valueButtons.push(e);
    }
    if (this.valueButtons.join('').length > 15) {
      this.messageService.add({
        severity: 'error',
        summary: 'Warning',
        detail: 'tidak dapat memasukkan lebih dari 15 digit'
      });
    } else {
      this.currentOperand = this.valueButtons.join('');
      this.setDecimalValue();
    }
  }

  setDecimalValue() {
    if (this.currentOperand.split('.')[1]) {
      if (this.currentOperand.split('.')[1].length > 10) {
        this.messageService.add({
          severity: 'error',
          summary: 'Warning',
          detail: 'tidak dapat memasukkan lebih dari 10 digit dibelakang koma desimal'
        });
      } else {
        this.displayDecimal = this.currentOperand.split('.')[1] ? '.' + this.currentOperand.split('.')[1] : '';
      }
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
    this.displayDecimal = '';
  }
  allClear() {
    this.clearCurrentOperand();
    this.previousOperand = '0';
  }
  deleteLastNum() {
    this.currentOperand = this.currentOperand.slice(0, -1);
    this.displayDecimal = this.currentOperand.split('.')[1] ? '.' + this.currentOperand.split('.')[1] : '';
  }

  onConfirm() {
    this.messageService.clear('c');
  }
  onReject() {
    this.messageService.clear('c');
  }
  clear() {
    this.messageService.clear();
  }
}
