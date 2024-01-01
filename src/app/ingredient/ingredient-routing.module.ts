import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientComponent } from './ingredient.component';
import { CreateUpdateIngredientComponent } from './create-update-ingredient/create-update-ingredient.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { 
    path: '', 
    component: IngredientComponent,
    title: `Ingredients - ${environment.application.name}`
  },
  { 
    path: 'create', 
    component: CreateUpdateIngredientComponent,
    title: `Create Ingredient - ${environment.application.name}`
  },
  { 
    path: 'edit/:id', 
    component: CreateUpdateIngredientComponent,
    title: `Edit Ingredient - ${environment.application.name}`
  },
  { 
    path: 'details/:id', 
    component: IngredientDetailsComponent,
    title: `Ingredient Details - ${environment.application.name}`
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule { }
