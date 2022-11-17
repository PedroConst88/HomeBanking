import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransComponent } from './new-trans.component';

describe('NewTransComponent', () => {
  let component: NewTransComponent;
  let fixture: ComponentFixture<NewTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTransComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
