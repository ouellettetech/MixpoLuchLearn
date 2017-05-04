import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    shoppingListChanged = new EventEmitter<any>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Potatoes', 2)
    ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  getIngredients() {
        return this.ingredients.slice();
    }
}
