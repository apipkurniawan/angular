import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {

  constructor(private messageService: MessageService) { }

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
