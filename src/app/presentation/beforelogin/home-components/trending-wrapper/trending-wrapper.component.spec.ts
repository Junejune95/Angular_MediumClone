import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingWrapperComponent } from './trending-wrapper.component';

describe('TrendingWrapperComponent', () => {
  let component: TrendingWrapperComponent;
  let fixture: ComponentFixture<TrendingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
