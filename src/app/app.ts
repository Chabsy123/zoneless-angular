import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScenarioComponent } from './scenario-component/scenario-component';
import { ScenarioChildComponent } from './scenario-child-component/scenario-child-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScenarioComponent, ScenarioChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('zoneless-angular');
}
