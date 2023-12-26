import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { IngredientDto, IngredientService } from '@proxy/ingredients';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
  providers: [ListService],
})
export class IngredientComponent implements OnInit {
  
  ingredient = { items: [], totalCount: 0 } as PagedResultDto<IngredientDto>;

  constructor(
    public readonly list: ListService,
    private ingredientSvc: IngredientService
  ) {}
  
  ngOnInit(): void {
    
    this.loadIngredients();
  }

  //#region Private Functions

  private loadIngredients() : void {

    const ingredientStreamCreator = (query) => this.ingredientSvc.getList(query);

    this.list.hookToQuery(ingredientStreamCreator).subscribe((response) => {
      this.ingredient = response;
    });
  }

  //#endregion

}
