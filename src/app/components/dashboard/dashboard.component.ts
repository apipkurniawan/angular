import { Component, OnInit } from '@angular/core';
import { AppInfo } from 'src/app/models/app-info';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemCard: AppInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.itemCard = [
      { id: 1, title: 'Covid Tracker', route: 'covid-tracker', image: '', deskripsi: '', postedTime: new Date() },
      { id: 2, title: 'Calculator', route: 'calculator', image: '', deskripsi: '', postedTime: new Date() },
      { id: 3, title: 'Timer', route: 'timer', image: '', deskripsi: '', postedTime: new Date() },
      { id: 4, title: 'Todo App', route: 'todo-app', image: '', deskripsi: '', postedTime: new Date() },
      { id: 5, title: 'Accounting', route: 'accounting', image: '', deskripsi: '', postedTime: new Date() },
      { id: 6, title: 'Game', route: 'game', image: '', deskripsi: '', postedTime: new Date() },
      { id: 7, title: 'Book', route: 'book', image: '', deskripsi: '', postedTime: new Date() },
      { id: 8, title: 'Story', route: 'story', image: '', deskripsi: '', postedTime: new Date() }
    ]
  }

}
