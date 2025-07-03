import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hometeamplates } from './hometeamplates';

describe('Hometeamplates', () => {
  let component: Hometeamplates;
  let fixture: ComponentFixture<Hometeamplates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hometeamplates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hometeamplates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
