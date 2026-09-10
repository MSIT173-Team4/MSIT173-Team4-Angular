import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { MOCK_PANTRY_ITEMS, MOCK_RECIPES, getMockRecipeDetail } from './mock-recipe.data';
import {
  PantryPageData,
  RecipeDetailPageData,
  RecipeListPageData
} from './recipe.models';
import { RecipeService } from './service/recipe.service';
import { recipeDemoConfig } from './api.config';

export const recipeListResolver: ResolveFn<RecipeListPageData> = () => {
  const recipeService = inject(RecipeService);

  return recipeService.getRecipes().pipe(
    map((response) => response.success && response.data?.length
      ? { recipes: response.data, source: 'api' as const, notice: response.message }
      : { recipes: MOCK_RECIPES, source: 'mock' as const, notice: 'API 無公開食譜，已載入測試資料。' }),
    catchError(() => of({
      recipes: MOCK_RECIPES,
      source: 'mock' as const,
      notice: 'Web API 尚未連線，已自動切換為 Mock 測試資料。'
    }))
  );
};

export const recipeDetailResolver: ResolveFn<RecipeDetailPageData> = (route: ActivatedRouteSnapshot) => {
  const recipeService = inject(RecipeService);
  const recipeId = Number(route.paramMap.get('id')) || 1;

  return recipeService.getRecipeById(recipeId).pipe(
    map((response) => response.success && response.data
      ? { recipe: response.data, source: 'api' as const, notice: response.message }
      : { recipe: getMockRecipeDetail(recipeId), source: 'mock' as const, notice: '找不到 API 資料，已載入對應測試食譜。' }),
    catchError(() => of({
      recipe: getMockRecipeDetail(recipeId),
      source: 'mock' as const,
      notice: 'Web API 尚未連線，已自動切換為 Mock 食譜詳情。'
    }))
  );
};

export const pantryResolver: ResolveFn<PantryPageData> = () => {
  const recipeService = inject(RecipeService);

  return recipeService.getPantryItems(recipeDemoConfig.userId).pipe(
    map((response) => response.success && response.data?.length
      ? { pantryItems: response.data, source: 'api' as const, notice: response.message }
      : {
          pantryItems: MOCK_PANTRY_ITEMS,
          source: 'mock' as const,
          notice: 'API 無冰箱庫存，已載入測試資料。'
        }),
    catchError(() => of({
      pantryItems: MOCK_PANTRY_ITEMS,
      source: 'mock' as const,
      notice: 'Web API 尚未連線，已自動切換為 Mock 冰箱資料。'
    }))
  );
};
