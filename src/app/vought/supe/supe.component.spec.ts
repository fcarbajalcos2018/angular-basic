import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupeComponent } from './supe.component';

describe('SupeComponent', () => {
  let component: SupeComponent;
  let fixture: ComponentFixture<SupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
