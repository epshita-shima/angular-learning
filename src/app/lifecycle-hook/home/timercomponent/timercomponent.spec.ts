import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timercomponent } from './timercomponent';

describe('Timercomponent', () => {
  let component: Timercomponent;
  let fixture: ComponentFixture<Timercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timercomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
