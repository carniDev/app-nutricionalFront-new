import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarIngredienteComponent } from './buscar-ingrediente.component';

describe('BuscarIngredienteComponent', () => {
  let component: BuscarIngredienteComponent;
  let fixture: ComponentFixture<BuscarIngredienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarIngredienteComponent]
    });
    fixture = TestBed.createComponent(BuscarIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
