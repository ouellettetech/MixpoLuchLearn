import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { DropdownDirective } from '../shared/dropdown.directive';



@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

    ]
})
export class RecipesModule {}
