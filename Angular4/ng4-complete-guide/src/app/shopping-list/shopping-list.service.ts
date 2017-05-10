import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();


    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Potatoes', 2)
    ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
      return this.ingredients.slice();
    }
  

  getIngredient(index: number) {
      return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredent: Ingredient){
    this.ingredients[index] = newIngredent;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.slice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
