import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSomosProyaComponent } from './section-somos-proya.component';

describe('SectionSomosProyaComponent', () => {
  let component: SectionSomosProyaComponent;
  let fixture: ComponentFixture<SectionSomosProyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSomosProyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSomosProyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
