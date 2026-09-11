export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  errors: string[] | null;
  timestamp: string;
}

export interface RecipeIngredient {
  ingredientId: number;
  name: string;
  displayAmount: string;
  baseAmount: number | null;
  unit: string;
  isMain: boolean;
  sortOrder: number;
}

export interface RecipeStep {
  stepNumber: number;
  instruction: string;
  imageUrl: string | null;
  timerSeconds: number;
}

export interface RecipeDetail {
  recipeId: number;
  userId: number;
  categoryId: number | null;
  title: string;
  description: string;
  coverImageUrl: string | null;
  youTubeVideoId: string | null;
  aiPrepTips: string | null;
  isAiGenerated: boolean;
  cookingMinutes: number;
  defaultServings: number;
  totalCalories: number;
  views: number;
  likes: number;
  favorites: number;
  categoryName: string | null;
  authorName: string;
  tags: string[];
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
}

export interface RecipeSummary {
  recipeId: number;
  title: string;
  description: string;
  coverImageUrl: string | null;
  cookingMinutes: number;
  totalCalories: number;
  defaultServings: number;
  views: number;
  likes: number;
  favorites: number;
  isAiGenerated: boolean;
  categoryName: string | null;
  authorName: string;
  tags: string[];
}

export interface PantryItem {
  pantryId: number;
  userId: number;
  ingredientId: number;
  ingredientName: string;
  amount: number;
  unit: string;
  expirationDate: string | null;
  daysLeft: number;
  storageLocation: string;
  note: string | null;
  createdAt: string;
}

export type DataSource = 'api' | 'mock';

export interface RecipeListPageData {
  recipes: RecipeSummary[];
  source: DataSource;
  notice: string;
}

export interface RecipeDetailPageData {
  recipe: RecipeDetail;
  source: DataSource;
  notice: string;
}

export interface PantryPageData {
  pantryItems: PantryItem[];
  source: DataSource;
  notice: string;
}

export interface CompleteCookingRequest {
  userId: number;
  recipeId: number;
  targetServings: number;
}

export interface CookingDeductionResult {
  ingredientId: number;
  ingredientName: string;
  requiredAmount: number;
  consumedAmount: number;
  remainingAmount: number;
  unit: string;
  isExhausted: boolean;
  isInsufficient: boolean;
}
