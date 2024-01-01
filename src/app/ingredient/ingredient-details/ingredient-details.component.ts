import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientDetailsDto, IngredientService } from '@proxy/ingredients';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.scss']
})
export class IngredientDetailsComponent implements OnInit {

  ingredientId!: string;
  ingredient!: IngredientDetailsDto;

  constructor(
    private ingredientSvc: IngredientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.setIngredientId();


    if (this.ingredientId) {

      this.loadIngredient();
    }
  }

  //#region Private Functions

  private setIngredientId(): void {

    if (this.activatedRoute.snapshot.paramMap.get('id')) {

      this.ingredientId = this.activatedRoute.snapshot.paramMap.get('id');
    }
  }

  private loadIngredient(): void {

    this.ingredientSvc.get(this.ingredientId).subscribe({
      next: (ingredientFromApi: IngredientDetailsDto) => {

        this.ingredient = ingredientFromApi;
      }
    });
  }

  //#endregion

}
