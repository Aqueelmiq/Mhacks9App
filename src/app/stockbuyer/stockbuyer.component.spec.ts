import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockbuyerComponent } from './stockbuyer.component';

describe('StockbuyerComponent', () => {
  let component: StockbuyerComponent;
  let fixture: ComponentFixture<StockbuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockbuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockbuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
