import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierFinalComponent } from './panier-final.component';

describe('PanierFinalComponent', () => {
  let component: PanierFinalComponent;
  let fixture: ComponentFixture<PanierFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
