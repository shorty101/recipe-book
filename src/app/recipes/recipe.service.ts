import { Injectable } from '@angular/core';

import { Recipe } from "../recipe";
import { Ingredient } from "../ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Sauerkraut', 'Easy to make', 'http://www.almanac.com/sites/default/files/image_nodes/how-to-make-sauerkraut.jpg', [
      new Ingredient('Cabbage', 2),
      new Ingredient('Salt', 5),
      new Ingredient('Vinegar', 3)
    ]),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  
}
