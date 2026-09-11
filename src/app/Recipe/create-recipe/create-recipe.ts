import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-create-recipe',
  imports: [
    FormsModule,
    RouterLink,
    ButtonModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    MessageModule,
    TextareaModule
  ],
  templateUrl: './create-recipe.html',
  styleUrl: './create-recipe.css'
})
export class CreateRecipe {
  readonly title = signal('番茄嫩豆腐鮮魚煲');
  readonly description = signal('運用冰箱即期食材完成的快速家常料理。');
  readonly servings = signal(2);
  readonly cookingMinutes = signal(20);
  readonly ingredientDraft = signal('牛番茄 2 顆\n板豆腐 1 盒\n鱸魚片 300 公克');
  readonly instructionDraft = signal('1. 處理所有食材。\n2. 將牛番茄炒出香氣後加入清水。\n3. 放入豆腐與鱸魚片煮熟並調味。');
  readonly statusMessage = signal('');
  readonly canSubmit = computed(() => this.title().trim().length > 0 && this.ingredientDraft().trim().length > 0);

  saveDraft(): void {
    this.statusMessage.set('草稿已暫存在目前瀏覽器狀態；正式寫入 API 將在建立食譜端點完成後接上。');
  }
}
