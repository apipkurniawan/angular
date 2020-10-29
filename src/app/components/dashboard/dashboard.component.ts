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
      { id: '1', title: 'Covid Tracker', image: '', },
      { id: '2', title: 'Calculator', image: '', },
      { id: '3', title: 'Timer', image: '', },
      { id: '4', title: 'Todo App', image: '', },
      { id: '5', title: 'Accounting', image: '', },
      { id: '6', title: 'Game', image: '', },
      { id: '7', title: 'Book', image: '', },
      { id: '8', title: 'Story', image: '', },
    ]
  }

}
