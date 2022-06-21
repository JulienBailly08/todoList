import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragboxComponent } from './dragbox.component';

describe('DragboxComponent', () => {
  let component: DragboxComponent;
  let fixture: ComponentFixture<DragboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
