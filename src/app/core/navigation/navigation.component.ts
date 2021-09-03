import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor() {}

  navigationList: any;
  navigationButton: any;
  backdrop: any;

  ngOnInit(): void {
    this.navigationList = document.querySelector('.navigation__list');
    this.navigationButton = document.querySelector('.navigation__button');
    this.backdrop = document.querySelector('.navigation__backdrop');

    // this.navigationButton.addEventListener('click', this.toggleMenu());
  }

  toggleMenu() {
    this.navigationList.classList.toggle('open');
    this.backdrop.classList.toggle('navigation__backdrop__show');
    this.navigationButton.classList.toggle('button__rotate');
    document.body.classList.toggle('lock-scroll');

    for (
      let i = 0;
      i < document.querySelectorAll('.navigation__icon').length;
      i++
    ) {
      const element = document.querySelectorAll('.navigation__icon')[i];
      element.classList.toggle('burger-icon');
    }
  }
}
