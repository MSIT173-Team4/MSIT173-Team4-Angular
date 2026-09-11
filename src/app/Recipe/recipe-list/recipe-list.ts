import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RecipeListPageData, RecipeSummary } from '../recipe.models';

@Component({ selector: 'app-recipe-list', imports: [RouterLink, ButtonModule, CardModule, TagModule], templateUrl: './recipe-list.html', styleUrl: './recipe-list.css' })
export class RecipeList implements OnInit {
  private readonly route = inject(ActivatedRoute);
  readonly recipes = signal<RecipeSummary[]>([]);
  readonly dataNotice = signal('');
  readonly isUsingMockData = signal(false);

  ngOnInit(): void {
    const pageData = this.route.snapshot.data['pageData'] as RecipeListPageData;
    this.recipes.set(pageData.recipes);
    this.dataNotice.set(pageData.notice);
    this.isUsingMockData.set(pageData.source === 'mock');
  }
}
