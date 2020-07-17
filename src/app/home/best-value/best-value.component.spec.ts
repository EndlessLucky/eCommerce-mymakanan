import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestValueComponent } from './best-value.component';

describe('BestValueComponent', () => {
  let component: BestValueComponent;
  let fixture: ComponentFixture<BestValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
