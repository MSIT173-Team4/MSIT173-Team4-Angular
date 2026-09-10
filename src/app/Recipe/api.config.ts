const friendlyFoodApiBaseUrl = 'https://localhost:7164/api';
const smartBotApiBaseUrl = 'https://localhost:7189/api';

export const apiConfig = {
  recipes: {
    list: `${friendlyFoodApiBaseUrl}/recipe`,
    detail: (recipeId: number) => `${friendlyFoodApiBaseUrl}/recipe/${recipeId}`,
    metadata: `${friendlyFoodApiBaseUrl}/recipe/metadata`,
    create: `${friendlyFoodApiBaseUrl}/recipe`,
    update: (recipeId: number) => `${friendlyFoodApiBaseUrl}/recipe/${recipeId}`,
    delete: (recipeId: number) => `${friendlyFoodApiBaseUrl}/recipe/${recipeId}`,
    completeCooking: `${friendlyFoodApiBaseUrl}/recipe/complete-cooking`,
    like: (recipeId: number) => `${friendlyFoodApiBaseUrl}/recipe/${recipeId}/like`,
    favorite: (recipeId: number) => `${friendlyFoodApiBaseUrl}/recipe/${recipeId}/favorite`
  },
  pantry: {
    listByUser: (userId: number) => `${friendlyFoodApiBaseUrl}/recipe/pantry/user/${userId}`,
    create: `${friendlyFoodApiBaseUrl}/recipe/pantry`,
    update: (pantryId: number) => `${friendlyFoodApiBaseUrl}/recipe/pantry/${pantryId}`,
    delete: (pantryId: number) => `${friendlyFoodApiBaseUrl}/recipe/pantry/${pantryId}`
  },
  smartBot: {
    localizeIngredient: `${smartBotApiBaseUrl}/chat/localize-ingredient`,
    parseRecipe: `${smartBotApiBaseUrl}/chat/parse-recipe`,
    chefRecommend: `${smartBotApiBaseUrl}/chat/chef-recommend`
  }
} as const;

export const recipeDemoConfig = {
  userId: 2
} as const;
