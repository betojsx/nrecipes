import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input('recipe') recipe: Recipe;
  constructor() {
    //this.recipe = this.rec;
  }

  ngOnInit() {
    //this.steps.push(  );
    //this.ingredients.push(  );
    //this.recipe = ;
    
  }

}
