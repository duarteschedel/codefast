import { Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-service-feature',
  imports: [Icon],
  templateUrl: './service-feature.html',
  styleUrl: './service-feature.scss',
})
/**
 * @atomic molecule
 * Service feature block with a large circular icon, title, and description.
 */
export class ServiceFeature {
  icon = input('');
  title = input('');
  description = input('');
}
