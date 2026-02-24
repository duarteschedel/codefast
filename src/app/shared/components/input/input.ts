import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  label = input('');
  placeholder = input('');
  type = input<'text' | 'email' | 'password' | 'search'>('text');
  value = input('');
  valueChange = output<string>();

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
