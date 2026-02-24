import { Component, input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss',
})
/**
 * @atomic organism
 * Full-bleed testimonial section with a background image, quote, text, and author attribution.
 */
export class Testimonial {
  backgroundImage = input('');
  quote = input('');
  text = input('');
  authorName = input('');
  authorRole = input('');
}
