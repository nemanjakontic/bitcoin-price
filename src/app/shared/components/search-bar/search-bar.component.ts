import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'senscare-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() icon: string = '';
  @Input() position: string = 'left';
  @Input() placeholder: string = '';
  iconName!: string;

  constructor() { }

  ngOnInit(): void {
    switch (this.icon) {
      case 'map':
        this.iconName = '/assets/icons/Location.svg#Layer_1';
        break;
      case 'search':
        this.iconName = '/assets/icons/Magnifier.svg#Layer_1';
        break;
      default:
        this.iconName = '';
        break;
    }
  }

}
