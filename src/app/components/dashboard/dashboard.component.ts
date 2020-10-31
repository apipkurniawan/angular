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
      {
        id: 1, title: 'Covid Tracker', route: 'covid-tracker', image: '',
        deskripsi: 'masih dalam pengerjaan', postedTime: new Date(), author: 'anynomous'
      },
      {
        id: 2, title: 'Calculator', route: 'calculator', image: '',
        deskripsi: 'simple calculator using angular', postedTime: new Date(), author: 'apip'
      },
      {
        id: 3, title: 'Timer', route: 'timer', image: '',
        deskripsi: 'masih dalam pengerjaan', postedTime: new Date(), author: 'anynomous'
      },
      {
        id: 4, title: 'Todo App', route: 'todo-app', image: '',
        deskripsi: 'masih dalam pengerjaan', postedTime: new Date(), author: 'anynomous'
      },
      {
        id: 5, title: 'Accounting', route: 'accounting', image: '',
        deskripsi: 'masih dalam pengerjaan', postedTime: new Date(), author: 'anynomous'
      },
      {
        id: 6, title: 'Game', route: 'game', image: '',
        deskripsi: 'masih dalam pengerjaan', postedTime: new Date(), author: 'anynomous'
      },
      {
        id: 7, title: 'Book', route: 'book', image: '',
        deskripsi: 'masih dalam pengerjaan', postedTime: new Date(), author: 'anynomous'
      },
      {
        id: 8, title: 'Story', route: 'story', image: '',
        deskripsi: 'masih dalam pengerjaan', postedTime: new Date(), author: 'anynomous'
      }
    ]
  }

}
