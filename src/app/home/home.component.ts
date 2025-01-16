import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('iconTransition', [
      state(
        'menu',
        style({
          opacity: 1,
          transform: 'rotate(0deg)',
        })
      ),
      state(
        'close',
        style({
          opacity: 1,
          transform: 'rotate(90deg)',
        })
      ),
      transition('menu <=> close', [animate('0.8s ease-in-out')]),
    ]),
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  isMenuOpen = false;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    document.addEventListener('click', this.onClickOutside.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onClickOutside.bind(this));
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClickOutside(event: MouseEvent) {
    if (this.elRef.nativeElement.contains(event.target)) {
      return;
    }

    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
