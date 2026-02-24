import { Component, input } from '@angular/core';

@Component({
  selector: 'app-color-pill',
  imports: [],
  templateUrl: './color-pill.html',
  styleUrl: './color-pill.scss',
})
/**
 * @atomic atom
 * Color swatch button with a circular color dot and label text.
 */
export class ColorPill {
  label = input('');
  color = input('');
}
