import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place-model';
@Injectable({
  providedIn: 'root',
})
export class PlaceService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:7164/api/place';

  getNearbyPlaces(
    latitude: number,
    longitude: number,
    radius: number = 1
  ): Observable<Place[]> {

    const params = new HttpParams()
      .set('latitude', latitude)
      .set('longitude', longitude)
      .set('radius', radius);

    return this.http.get<Place[]>(
      `${this.apiUrl}/nearby`,
      { params }
    );
  }
}
