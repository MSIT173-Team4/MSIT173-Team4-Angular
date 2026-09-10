import { Routes } from '@angular/router';
import { CreateProduct } from './Market/components/create-product/create-product';
import { NearbyPlace } from './FoodMap/nearby-place/nearby-place';
import { GetPublicProduct } from './Market/components/get-public-product/get-public-product';

export const routes: Routes = [
  { path: 'market/create-product', component: CreateProduct },
  { path: 'market/products', component: GetPublicProduct },
  { path: 'nearby-place', component: NearbyPlace }
];
