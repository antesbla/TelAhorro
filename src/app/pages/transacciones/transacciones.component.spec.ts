import { ComponentFixture, TestBed } from '@angular/core/testing';

import { transaccionesComponent } from './transacciones.component';

describe('TransaccionesComponent', () => {
  let component: transaccionesComponent;
  let fixture: ComponentFixture<transaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [transaccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(transaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
