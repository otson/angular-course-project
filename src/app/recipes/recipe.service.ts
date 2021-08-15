import {Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] =  [
    new Recipe('A Test Recipe', 'This is a test', 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/4e/7b/au-t2-e-5093-pancake-recipe-english_ver_5.webp')
  ];

  getRecipes() {
    return this.recipes.slice(); // new copy
  }
}
