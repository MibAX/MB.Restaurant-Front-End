import { NgModule } from '@angular/core';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { IngredientComponent } from './ingredient.component';
import { SharedModule } from '../shared/shared.module';
import { CreateUpdateIngredientComponent } from './create-update-ingredient/create-update-ingredient.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';


@NgModule({
  declarations: [
    IngredientComponent,
    CreateUpdateIngredientComponent,
    IngredientDetailsComponent
  ],
  imports: [
    SharedModule,
    IngredientRoutingModule
  ]
})
export class IngredientModule { }
