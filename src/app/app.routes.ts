import { Routes } from '@angular/router';
import { CreateProduct } from './Market/components/create-product/create-product';
import { NearbyPlace } from './FoodMap/nearby-place/nearby-place';

export const routes: Routes = [
  { path: 'market/create-product', component: CreateProduct },
  { path: 'nearby-place', component: NearbyPlace }
];
