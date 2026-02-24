import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  variant = input<'primary' | 'secondary' | 'outline'>('primary');
  size = input<'sm' | 'md' | 'lg'>('md');
  disabled = input(false);
  type = input<'button' | 'submit'>('button');
}
