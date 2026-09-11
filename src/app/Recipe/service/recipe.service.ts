import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from '../api.config';
import {
  ApiResponse,
  CompleteCookingRequest,
  CookingDeductionResult,
  PantryItem,
  RecipeDetail,
  RecipeSummary
} from '../recipe.models';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private readonly http = inject(HttpClient);

  getRecipes(): Observable<ApiResponse<RecipeSummary[]>> {
    return this.http.get<ApiResponse<RecipeSummary[]>>(apiConfig.recipes.list);
  }

  getRecipeById(id: number): Observable<ApiResponse<RecipeDetail>> {
    return this.http.get<ApiResponse<RecipeDetail>>(apiConfig.recipes.detail(id));
  }

  getPantryItems(userId: number): Observable<ApiResponse<PantryItem[]>> {
    return this.http.get<ApiResponse<PantryItem[]>>(
      apiConfig.pantry.listByUser(userId)
    );
  }

  completeCooking(payload: CompleteCookingRequest): Observable<ApiResponse<CookingDeductionResult[]>> {
    return this.http.post<ApiResponse<CookingDeductionResult[]>>(
      apiConfig.recipes.completeCooking,
      payload
    );
  }
}
