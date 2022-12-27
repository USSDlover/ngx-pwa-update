import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPwaUpdateComponent } from './ngx-pwa-update.component';

describe('NgxPwaUpdateComponent', () => {
  let component: NgxPwaUpdateComponent;
  let fixture: ComponentFixture<NgxPwaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPwaUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPwaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
