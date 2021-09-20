import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-notification',
  templateUrl: './card-notification.component.html',
  styleUrls: ['./card-notification.component.scss']
})
export class CardNotificationComponent implements OnInit {

  @Input() index!: number;
  @Input() checked = false;

  constructor() { }

  ngOnInit(): void {
  }

  check(): void {
    this.checked = !this.checked;
  }

}
