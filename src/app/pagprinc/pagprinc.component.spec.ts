import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagprincComponent } from './pagprinc.component';

describe('PagprincComponent', () => {
  let component: PagprincComponent;
  let fixture: ComponentFixture<PagprincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagprincComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagprincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
