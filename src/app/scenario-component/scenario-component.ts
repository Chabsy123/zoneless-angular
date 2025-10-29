import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-scenario-component',
  imports: [],
  templateUrl: './scenario-component.html',
  styleUrl: './scenario-component.scss',
})
export class ScenarioComponent {
  // First scenario
  count = signal(0);
}
