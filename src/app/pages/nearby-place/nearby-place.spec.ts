import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyPlace } from './nearby-place';

describe('NearbyPlace', () => {
  let component: NearbyPlace;
  let fixture: ComponentFixture<NearbyPlace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearbyPlace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearbyPlace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
