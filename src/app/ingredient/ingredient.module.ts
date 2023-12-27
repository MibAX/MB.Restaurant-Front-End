import { NgModule } from '@angular/core';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { IngredientComponent } from './ingredient.component';
import { SharedModule } from '../shared/shared.module';
import { CreateUpdateIngredientComponent } from './create-update-ingredient/create-update-ingredient.component';


@NgModule({
  declarations: [
    IngredientComponent,
    CreateUpdateIngredientComponent
  ],
  imports: [
    SharedModule,
    IngredientRoutingModule
  ]
})
export class IngredientModule { }
