import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProductorComponent } from './perfil-productor.component';

describe('PerfilProductorComponent', () => {
  let component: PerfilProductorComponent;
  let fixture: ComponentFixture<PerfilProductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilProductorComponent]
    });
    fixture = TestBed.createComponent(PerfilProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
