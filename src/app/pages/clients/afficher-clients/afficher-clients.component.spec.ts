import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherClientsComponent } from './afficher-clients.component';

describe('AfficherClientsComponent', () => {
  let component: AfficherClientsComponent;
  let fixture: ComponentFixture<AfficherClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
