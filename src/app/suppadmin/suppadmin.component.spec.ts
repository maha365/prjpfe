import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppadminComponent } from './suppadmin.component';

describe('SuppadminComponent', () => {
  let component: SuppadminComponent;
  let fixture: ComponentFixture<SuppadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
