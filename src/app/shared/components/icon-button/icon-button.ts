import { Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-icon-button',
  imports: [Icon],
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.scss',
})
/**
 * @atomic atom
 * Circular icon button used for wishlist hearts and navigation arrows.
 */
export class IconButton {
  icon = input('');
  size = input<'sm' | 'lg'>('sm');
  variant = input<'dark' | 'light'>('dark');
  active = input(false);
  ariaLabel = input('');
}
