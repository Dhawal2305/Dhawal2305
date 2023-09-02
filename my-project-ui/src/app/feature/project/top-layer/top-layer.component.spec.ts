import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLayerComponent } from './top-layer.component';

describe('TopLayerComponent', () => {
  let component: TopLayerComponent;
  let fixture: ComponentFixture<TopLayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopLayerComponent]
    });
    fixture = TestBed.createComponent(TopLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
