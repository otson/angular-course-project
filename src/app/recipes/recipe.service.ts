import {Injectable, EventEmitter} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] =  [
    new Recipe('A Test Recipe',
      'This is a test',
      'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/4e/7b/au-t2-e-5093-pancake-recipe-english_ver_5.webp',
    [new Ingredient('Apple', 5), new Ingredient('Sugar', 100)]),
    new Recipe(
      'A Test Recipe 2',
      'This is an another test',
      null,
      [new Ingredient('Milk', 500)])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice(); // new copy
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
