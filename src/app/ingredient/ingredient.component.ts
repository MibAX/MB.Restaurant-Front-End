import { ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService, Toaster, ToasterService } from '@abp/ng.theme.shared';
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
    private ingredientSvc: IngredientService,
    private confirmation: ConfirmationService,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {

    this.loadIngredients();
  }

  deleteIngredient(ingredient: IngredientDto): void {

    const confirmOptions :  Partial<Confirmation.Options> = {
      dismissible: false,
      yesText: "Delete"
    };
    this.confirmation.error(`Are you sure you want to delete ${ingredient.name}?`, "Delete Ingredient", confirmOptions)
      .subscribe((status: Confirmation.Status) => {

        if (status === Confirmation.Status.confirm) {

          this.ingredientSvc.delete(ingredient.id).subscribe({
            next: () => {

              this.list.get();
              
              const options: Partial<Toaster.ToastOptions> = {
                messageLocalizationParams: [ingredient.name],
              };
              this.toaster.success('::DeletedSuccessfully', undefined, options);
            }
          });
        }
      });
  }

  //#region Private Functions

  private loadIngredients(): void {

    const ingredientStreamCreator = (query) => this.ingredientSvc.getList(query);

    this.list.hookToQuery(ingredientStreamCreator).subscribe((response) => {
      this.ingredient = response;
    });
  }

  //#endregion

}
