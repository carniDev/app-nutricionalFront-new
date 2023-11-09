import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarComidaComponent } from './generar-comida.component';

describe('GenerarComidaComponent', () => {
  let component: GenerarComidaComponent;
  let fixture: ComponentFixture<GenerarComidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarComidaComponent]
    });
    fixture = TestBed.createComponent(GenerarComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
