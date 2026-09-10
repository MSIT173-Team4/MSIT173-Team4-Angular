export interface Place {
  placeID: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone?: string;
  googleRating?: number;
  googleReviewCount?: number;
  isRecommend: boolean;
}
