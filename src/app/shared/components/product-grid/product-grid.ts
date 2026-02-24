import { Component, input } from '@angular/core';
import { FilterChip } from '../filter-chip/filter-chip';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-grid',
  imports: [FilterChip, ProductCard],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
})
/**
 * @atomic organism
 * Product grid section with a title, filter chips, and a responsive grid of product cards.
 */
export class ProductGrid {
  title = input('');
  filters = input<{ label: string; active: boolean }[]>([]);
  products = input<{ name: string; price: string; image: string; loved: boolean }[]>([]);
}
