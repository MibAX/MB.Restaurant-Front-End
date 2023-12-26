import { NgModule } from '@angular/core';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { IngredientComponent } from './ingredient.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IngredientComponent
  ],
  imports: [
    SharedModule,
    IngredientRoutingModule
  ]
})
export class IngredientModule { }
