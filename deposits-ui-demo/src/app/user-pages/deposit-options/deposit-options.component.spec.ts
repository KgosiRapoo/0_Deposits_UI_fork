import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositOptionsComponent } from './deposit-options.component';

describe('DepositOptionsComponent', () => {
  let component: DepositOptionsComponent;
  let fixture: ComponentFixture<DepositOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
