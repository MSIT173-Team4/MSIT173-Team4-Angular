import { PlaceService } from './placeservice';
import { TestBed } from '@angular/core/testing';


describe('Placeservice', () => {
  let service: PlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
