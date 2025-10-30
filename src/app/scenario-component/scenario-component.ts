import { ChangeDetectorRef, Component,inject, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-scenario-component',
  imports: [JsonPipe],
  templateUrl: './scenario-component.html',
  styleUrl: './scenario-component.scss',
})
export class ScenarioComponent {
count1() {
throw new Error('Method not implemented.');
}
count2() {
throw new Error('Method not implemented.');
}
  // First scenario
  counter = signal(0);

  // Second scenario
  private http = inject(HttpClient);
 //  Convert Observable to a Signal
  data = toSignal(this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts'));

  // Third scenario
  //  The $ suffix convention means "this is an Observable"
  posts$: Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/posts');

  // Fourth scenario
   click = signal(0);

  //   setInterval(() => {
  //   this.count++;
  // }, 1000);
  // constructor() {
  //   setInterval(() => {
  //     // Proper signal update
  //     this.click.set(this.click() + 1);
  //   }, 1000);
  // }

  // Fifth scenario
    count = signal(0);

  increment() {
    this.count.update(c => c + 1);
  }


  // Sixth scenario
  // data2: any;

  // constructor(private cdRef: ChangeDetectorRef) {}

  // updateData(newValue: any) {
    // this.data = newValue;
    // this.cdRef.markForCheck();
    //  manually tell Angular to re-check
  // }
   data2 = signal<any>(null);

    updateData(newValue: any) {
    // Signal update automatically re-renders the template
    // Works fine with the old Change Detection (Zone.js) system.
//  But if you’re using Signals or Zone-less Angular, you need manual change detection (markForCheck()) for updates outside Angular’s context.
//  It’s imperative, verbose, and can be error-prone if you forget to trigger it.
    this.data2.set(newValue);
  }
}
