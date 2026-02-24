import { Component, input } from '@angular/core';
import { Button } from '../button/button';
import { OverlayCard } from '../overlay-card/overlay-card';

@Component({
  selector: 'app-hero-banner',
  imports: [Button, OverlayCard],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
})
/**
 * @atomic organism
 * Full-width hero banner with a main image overlay, title, subtitle, CTA button, and side cards.
 */
export class HeroBanner {
  mainImage = input('');
  title = input('');
  subtitle = input('');
  ctaLabel = input('VIEW COLLECTIONS');
  sideCards = input<{ image: string; label: string }[]>([]);
}
