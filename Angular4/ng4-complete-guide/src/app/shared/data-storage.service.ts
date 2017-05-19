import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) {}

     storeRecipes() {
        return this.http.put('https://ng-recipe-book-90414.firebaseio.com/recipes.json',
            this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://ng-recipe-book-90414.firebaseio.com/recipes.json')
            .map(
                (response: Response) =>;
    }
}
