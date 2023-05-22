import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNuestrosProgramasComponent } from './section-nuestros-programas.component';

describe('SectionNuestrosProgramasComponent', () => {
  let component: SectionNuestrosProgramasComponent;
  let fixture: ComponentFixture<SectionNuestrosProgramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNuestrosProgramasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionNuestrosProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
