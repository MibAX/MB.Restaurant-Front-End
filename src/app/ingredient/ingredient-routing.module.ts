import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientComponent } from './ingredient.component';
import { CreateUpdateIngredientComponent } from './create-update-ingredient/create-update-ingredient.component';

const routes: Routes = [
  { 
    path: '', 
    component: IngredientComponent 
  },
  { 
    path: 'create', 
    component: CreateUpdateIngredientComponent 
  },
  { 
    path: 'edit/:id', 
    component: CreateUpdateIngredientComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule { }
