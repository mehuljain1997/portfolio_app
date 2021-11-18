import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionaldetailComponent } from './transactionaldetail.component';

describe('TransactionaldetailComponent', () => {
  let component: TransactionaldetailComponent;
  let fixture: ComponentFixture<TransactionaldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionaldetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
