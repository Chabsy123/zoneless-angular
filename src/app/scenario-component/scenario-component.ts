import { Component,inject, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-scenario-component',
  imports: [JsonPipe],
  templateUrl: './scenario-component.html',
  styleUrl: './scenario-component.scss',
})
export class ScenarioComponent {
  // First scenario
  count = signal(0);

  // Second scenario
  private http = inject(HttpClient);
 //  Convert Observable to a Signal
  data = toSignal(this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts'));
}
