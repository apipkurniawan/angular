import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemCard: any[];

  constructor() { }

  ngOnInit(): void {
    this.itemCard = [
      { id: '1', title: 'Covid Tracker', route: 'covid-tracker', image: '', },
      { id: '2', title: 'Calculator', route: 'calculator', image: '', },
      { id: '3', title: 'Timer', route: 'timer', image: '', },
      { id: '4', title: 'Todo App', route: 'todo-app', image: '', },
      { id: '5', title: 'Accounting', route: 'accounting', image: '', },
      { id: '6', title: 'Game', route: 'game', image: '', },
      { id: '7', title: 'Book', route: 'book', image: '', },
      { id: '8', title: 'Story', route: 'story', image: '', },
    ]
  }

}
