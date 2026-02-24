import { Component, input } from '@angular/core';
import { IconButton } from '../icon-button/icon-button';

@Component({
  selector: 'app-product-card',
  imports: [IconButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
/**
 * @atomic molecule
 * Product card displaying an image, name, price, and a wishlist heart button.
 */
export class ProductCard {
  name = input('');
  price = input('');
  image = input('');
  loved = input(false);
}
