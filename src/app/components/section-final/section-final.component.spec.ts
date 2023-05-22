import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFinalComponent } from './section-final.component';

describe('SectionFinalComponent', () => {
  let component: SectionFinalComponent;
  let fixture: ComponentFixture<SectionFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
