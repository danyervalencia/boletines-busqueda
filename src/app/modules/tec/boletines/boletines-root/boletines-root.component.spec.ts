import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinesRootComponent } from './boletines-root.component';

describe('BoletinesRootComponent', () => {
  let component: BoletinesRootComponent;
  let fixture: ComponentFixture<BoletinesRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletinesRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletinesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
