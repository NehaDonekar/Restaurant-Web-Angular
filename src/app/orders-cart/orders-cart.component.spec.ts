import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCartComponent } from './orders-cart.component';

describe('OrdersCartComponent', () => {
  let component: OrdersCartComponent;
  let fixture: ComponentFixture<OrdersCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
