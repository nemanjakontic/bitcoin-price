import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'senscare-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() content!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
