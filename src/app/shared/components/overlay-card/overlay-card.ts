import { Component, input } from '@angular/core';

@Component({
  selector: 'app-overlay-card',
  imports: [],
  templateUrl: './overlay-card.html',
  styleUrl: './overlay-card.scss',
})
/**
 * @atomic molecule
 * Image card with a text label overlay. Supports top (hero side cards) and bottom (inspiration cards) positions.
 */
export class OverlayCard {
  image = input('');
  label = input('');
  overlayPosition = input<'top' | 'bottom'>('top');
  height = input('380px');
}
