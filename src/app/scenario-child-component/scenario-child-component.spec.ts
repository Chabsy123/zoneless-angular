import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioChildComponent } from './scenario-child-component';

describe('ScenarioChildComponent', () => {
  let component: ScenarioChildComponent;
  let fixture: ComponentFixture<ScenarioChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenarioChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenarioChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
