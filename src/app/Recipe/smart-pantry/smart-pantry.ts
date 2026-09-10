import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import { PantryItem, PantryPageData } from '../recipe.models';
@Component({ selector: 'app-smart-pantry', imports: [RouterLink, ButtonModule, TagModule], templateUrl: './smart-pantry.html', styleUrl: './smart-pantry.css' })
export class SmartPantry implements OnInit {
  private readonly route = inject(ActivatedRoute);
  readonly pantryItems = signal<PantryItem[]>([]);
  readonly dataNotice = signal('');

  ngOnInit(): void {
    const pageData = this.route.snapshot.data['pageData'] as PantryPageData;
    this.pantryItems.set(pageData.pantryItems);
    this.dataNotice.set(pageData.notice);
  }

  removeItem(pantryId: number): void {
    this.pantryItems.update((items) =>
      items.filter((item) => item.pantryId !== pantryId)
    );
  }
}
