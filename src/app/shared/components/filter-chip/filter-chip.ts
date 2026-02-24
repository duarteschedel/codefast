import { Component, input } from '@angular/core';

@Component({
  selector: 'app-filter-chip',
  imports: [],
  templateUrl: './filter-chip.html',
  styleUrl: './filter-chip.scss',
})
/**
 * @atomic atom
 * Pill-shaped filter button used for category filtering in product grids.
 */
export class FilterChip {
  label = input('');
  active = input(false);
}
