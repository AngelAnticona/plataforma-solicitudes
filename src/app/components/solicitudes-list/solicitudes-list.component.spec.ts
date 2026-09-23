import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SolicitudesListComponent } from './solicitudes-list.component';

describe('SolicitudesListComponent', () => {
  let component: SolicitudesListComponent;
  let fixture: ComponentFixture<SolicitudesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SolicitudesListComponent]
    });
    fixture = TestBed.createComponent(SolicitudesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
