import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RecipeDetail as RecipeDetailModel, RecipeDetailPageData } from '../recipe.models';

@Component({ selector: 'app-recipe-detail', imports: [RouterLink, ButtonModule, TagModule], templateUrl: './recipe-detail.html', styleUrl: './recipe-detail.css' })
export class RecipeDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  readonly recipe = signal<RecipeDetailModel | null>(null);
  readonly dataNotice = signal('');
  readonly isUsingMockData = signal(false);

  ngOnInit(): void {
    const pageData = this.route.snapshot.data['pageData'] as RecipeDetailPageData;
    this.recipe.set(pageData.recipe);
    this.dataNotice.set(pageData.notice);
    this.isUsingMockData.set(pageData.source === 'mock');
  }
}
