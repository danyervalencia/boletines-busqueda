import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchesRootComponent } from './searches-root.component';

describe('SearchesRootComponent', () => {
  let component: SearchesRootComponent;
  let fixture: ComponentFixture<SearchesRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchesRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
