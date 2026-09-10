import { PlaceService } from './../../services/place.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Place } from '../../models/place-model';

@Component({
  selector: 'app-nearby-place',
  imports: [CommonModule, FormsModule],
  templateUrl: './nearby-place.html',
  styleUrl: './nearby-place.css',
})
export class NearbyPlace {
  private PlaceService = inject(PlaceService);

  latitude = 24.181;
  longitude = 120.646;
  radius = 1;

  places: Place[] = [];

  loading = false;
  errorMessage = '';

  searchNearby(): void {

    this.loading = true;
    this.errorMessage = '';

    this.PlaceService
      .getNearbyPlaces(
        this.latitude,
        this.longitude,
        this.radius
      )
      .subscribe({
        next: (result) => {
          this.places = result;
          this.loading = false;
        },

        error: (error) => {
          console.error(error);

          this.errorMessage =
            '取得附近店家失敗，請確認 API 是否正常啟動。';

          this.loading = false;
        }
      });
  }
}
