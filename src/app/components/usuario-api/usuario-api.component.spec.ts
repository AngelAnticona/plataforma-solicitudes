import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuariosApiComponent } from './usuario-api.component';

describe('UsuariosApiComponent', () => {
  let component: UsuariosApiComponent;
  let fixture: ComponentFixture<UsuariosApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UsuariosApiComponent]
    });
    fixture = TestBed.createComponent(UsuariosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
