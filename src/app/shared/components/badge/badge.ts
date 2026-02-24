import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  text = input('');
  variant = input<'default' | 'success' | 'warning' | 'error'>('default');
}
