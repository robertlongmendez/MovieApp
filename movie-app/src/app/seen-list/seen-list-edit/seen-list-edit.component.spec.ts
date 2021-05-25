import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenListEditComponent } from './seen-list-edit.component';

describe('SeenListEditComponent', () => {
  let component: SeenListEditComponent;
  let fixture: ComponentFixture<SeenListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeenListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
