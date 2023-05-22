import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCaracteristicasComponent } from './section-caracteristicas.component';

describe('SectionCaracteristicasComponent', () => {
  let component: SectionCaracteristicasComponent;
  let fixture: ComponentFixture<SectionCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCaracteristicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
