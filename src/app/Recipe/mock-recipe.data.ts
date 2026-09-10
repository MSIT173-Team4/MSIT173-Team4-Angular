import {
  PantryItem,
  RecipeDetail,
  RecipeSummary
} from './recipe.models';

const image = (title: string): string =>
  `https://placehold.co/900x600/f1ded5/5b382c?text=${encodeURIComponent(title)}`;

export const MOCK_RECIPES: RecipeSummary[] = [
  createRecipeSummary(1, '香煎鮭魚佐蘆筍', '外酥內嫩的鮭魚搭配嫩綠蘆筍與清爽柑橘油醋。', 25, 480, 326, true, '異國料理'),
  createRecipeSummary(2, '香煎鱸魚佐檸檬奶油醬', '魚皮金黃酥脆，佐以微酸解膩的蒜香檸檬奶油醬。', 35, 420, 284, true, '異國料理'),
  createRecipeSummary(3, '窯烤風味瑪格麗特披薩', '番茄、羅勒與莫札瑞拉起司交織的經典拿坡里風味。', 45, 620, 192, true, '烘焙'),
  createRecipeSummary(4, '松露野菇燉飯', '綜合蕈菇與義大利米慢煮出滑順而濃郁的森林香氣。', 30, 510, 238, false, '異國料理'),
  createRecipeSummary(5, '活力巴西莓果碗', '十分鐘完成的高纖早餐，搭配莓果與堅果穀物。', 10, 290, 417, false, '健康輕食'),
  createRecipeSummary(6, '菠菜豆腐清湯', '優先消耗即期菠菜與板豆腐的清爽零剩食料理。', 15, 180, 156, true, '家常菜'),
  createRecipeSummary(7, '鮮菇時蔬快炒', '用冰箱常備蔬菜快速完成色彩豐富的家常菜。', 18, 260, 121, true, '家常菜'),
  createRecipeSummary(8, '味噌豆腐蔬食鍋', '一鍋到底的暖胃料理，適合清理零散菇類與蔬菜。', 25, 360, 203, false, '家常菜')
];

function createRecipeSummary(
  recipeId: number,
  title: string,
  description: string,
  cookingMinutes: number,
  totalCalories: number,
  likes: number,
  isAiGenerated: boolean,
  categoryName: string
): RecipeSummary {
  return {
    recipeId,
    title,
    description,
    coverImageUrl: image(title),
    cookingMinutes,
    totalCalories,
    defaultServings: recipeId === 5 ? 1 : 2,
    views: 120,
    likes,
    favorites: Math.floor(likes / 3),
    isAiGenerated,
    categoryName,
    authorName: 'recipe.demo',
    tags: ['新手友善', '零剩食']
  };
}

const baseIngredients = [
  { ingredientId: 1, name: '大西洋鮭魚排', displayAmount: '350 公克', baseAmount: 350, unit: 'g', isMain: true, sortOrder: 1 },
  { ingredientId: 2, name: '嫩蘆筍', displayAmount: '150 公克', baseAmount: 150, unit: 'g', isMain: true, sortOrder: 2 },
  { ingredientId: 3, name: '新鮮柳橙汁', displayAmount: '40 毫升', baseAmount: 40, unit: 'ml', isMain: false, sortOrder: 3 },
  { ingredientId: 4, name: '特級初榨橄欖油', displayAmount: '20 毫升', baseAmount: 20, unit: 'ml', isMain: false, sortOrder: 4 },
  { ingredientId: 5, name: '海鹽與黑胡椒', displayAmount: '適量', baseAmount: null, unit: '', isMain: false, sortOrder: 5 }
];

const baseSteps = [
  { stepNumber: 1, instruction: '鮭魚洗淨後用廚房紙巾完全吸乾，兩面撒上海鹽與黑胡椒，靜置五分鐘。', imageUrl: image('步驟一：處理食材'), timerSeconds: 300 },
  { stepNumber: 2, instruction: '平底鍋熱鍋後加入橄欖油，魚皮面朝下以中火煎至金黃酥脆。', imageUrl: image('步驟二：香煎鮭魚'), timerSeconds: 240 },
  { stepNumber: 3, instruction: '翻面後放入蘆筍快煎，起鍋前淋上柳橙油醋即可盛盤。', imageUrl: image('步驟三：完成盛盤'), timerSeconds: 180 }
];

export const MOCK_RECIPE_DETAILS: RecipeDetail[] = MOCK_RECIPES.map((recipe) => ({
  ...recipe,
  userId: 1,
  categoryId: null,
  youTubeVideoId: null,
  aiPrepTips: '優先使用即期食材，並在烹調前完成食材狀態確認。',
  ingredients: baseIngredients.map((ingredient, index) => ({
    ...ingredient,
    ingredientId: recipe.recipeId * 100 + index + 1
  })),
  steps: baseSteps
}));

export const MOCK_PANTRY_ITEMS: PantryItem[] = [
  createPantryItem(1, 21, '菠菜', 150, 'g', 1),
  createPantryItem(2, 22, '板豆腐', 200, 'g', 2),
  createPantryItem(3, 23, '紅蘿蔔', 2, '根', 7),
  createPantryItem(4, 24, '鮮香菇', 200, 'g', 5),
  createPantryItem(5, 25, '雞蛋', 6, '顆', 9),
  createPantryItem(6, 26, '無鹽奶油', 120, 'g', 18)
];

function createPantryItem(
  pantryId: number,
  ingredientId: number,
  ingredientName: string,
  amount: number,
  unit: string,
  daysLeft: number
): PantryItem {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysLeft);

  return {
    pantryId,
    userId: 2,
    ingredientId,
    ingredientName,
    amount,
    unit,
    expirationDate: expirationDate.toISOString().slice(0, 10),
    daysLeft,
    storageLocation: '冷藏',
    note: 'Angular Mock 測試資料',
    createdAt: new Date().toISOString()
  };
}

export const getMockRecipeDetail = (recipeId: number): RecipeDetail =>
  MOCK_RECIPE_DETAILS.find((recipe) => recipe.recipeId === recipeId) ?? MOCK_RECIPE_DETAILS[0];
