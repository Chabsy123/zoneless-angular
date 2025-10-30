import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-scenario-child-component',
  imports: [JsonPipe],
  templateUrl: './scenario-child-component.html',
  styleUrl: './scenario-child-component.scss',
})
export class ScenarioChildComponent {
  // reactive input signal
  data3 = input<any>();
  // Using input() signals:

// Automatically tracks and reacts to input changes.

// Works seamlessly in Zone-less apps.

// Eliminates the need for setInput() or markForCheck().

// Keeps parent-child communication declarative and reactive.
}
