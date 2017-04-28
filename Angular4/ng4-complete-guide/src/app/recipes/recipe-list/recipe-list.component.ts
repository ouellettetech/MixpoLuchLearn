import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A test recipe', 'this is a test recipe',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/2000px-Recipe-575434.svg.png');
  ];
  constructor() { }

  ngOnInit() {
  }

}
