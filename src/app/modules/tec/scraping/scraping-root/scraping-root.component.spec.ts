import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapingRootComponent } from './scraping-root.component';

describe('ScrapingRootComponent', () => {
  let component: ScrapingRootComponent;
  let fixture: ComponentFixture<ScrapingRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrapingRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrapingRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
