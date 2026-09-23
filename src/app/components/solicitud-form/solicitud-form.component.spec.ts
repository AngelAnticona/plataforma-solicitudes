import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SolicitudFormComponent } from './solicitud-form.component';

describe('SolicitudFormComponent', () => {
  let component: SolicitudFormComponent;
  let fixture: ComponentFixture<SolicitudFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SolicitudFormComponent]
    });
    fixture = TestBed.createComponent(SolicitudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
