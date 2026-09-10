import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NearbyPlace } from './FoodMap/nearby-place/nearby-place';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MSI173Team4Angular');
}
