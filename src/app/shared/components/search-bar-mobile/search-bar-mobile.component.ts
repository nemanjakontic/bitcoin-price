import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar-mobile',
  templateUrl: './search-bar-mobile.component.html',
  styleUrls: ['./search-bar-mobile.component.scss']
})
export class SearchBarMobileComponent implements OnInit {

  iconName!: string;
  bottomPartVisible = false;

  constructor() { }

  ngOnInit(): void {
    this.iconName = '/assets/icons/Magnifier.svg#Layer_1';
    // switch (this.icon) {
    //   case 'map':
    //     this.iconName = '/assets/icons/Location.svg#Layer_1';
    //     break;
    //   case 'search':
    //     this.iconName = '/assets/icons/Magnifier.svg#Layer_1';
    //     break;
    //   default:
    //     this.iconName = '';
    //     break;
    // }
  }

  toggleBottomPart(): void {
    document.getElementById('bottom')?.classList.toggle('search-bar-sm__bottom-show');
    this.bottomPartVisible = !this.bottomPartVisible;
    if (this.bottomPartVisible) {
      this.iconName = '/assets/icons/Close.svg#Layer_1'
    } else {
      this.iconName = '/assets/icons/Magnifier.svg#Layer_1';
    }
  }

}
