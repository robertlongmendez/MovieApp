import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListEditComponent } from './watch-list-edit.component';

describe('WatchListEditComponent', () => {
  let component: WatchListEditComponent;
  let fixture: ComponentFixture<WatchListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
