import { Component } from '@angular/core';
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
  styleUrl: './home.component.scss',
  animations: [
    trigger('transformMenu', [
      state(
        'start',
        style({
          // defina os estilos iniciais aqui
        })
      ),
      transition('* => start', [
        animate(
          '0.5s',
          style({
            // defina os estilos de transição aqui
          })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {}
