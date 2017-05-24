import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { NonSelectedComponent } from './recipe-list/non-selected/non-selected.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipesRoutingModule } from './recipes-routing.module';

import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        NonSelectedComponent,
        RecipeItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,

    ]
})
export class RecipesModule {}
