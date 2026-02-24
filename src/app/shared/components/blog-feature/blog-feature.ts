import { Component, input } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-blog-feature',
  imports: [Button],
  templateUrl: './blog-feature.html',
  styleUrl: './blog-feature.scss',
})
/**
 * @atomic organism
 * Featured blog post section with an image, title, description, and CTA button.
 */
export class BlogFeature {
  image = input('');
  title = input('');
  description = input('');
  ctaLabel = input('READ MORE');
}
