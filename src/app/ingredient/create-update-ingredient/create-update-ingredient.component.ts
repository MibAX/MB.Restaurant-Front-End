import { Toaster, ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientDetailsDto, IngredientService } from '@proxy/ingredients';
import { PageMode } from 'src/app/enums/pageMode.enum';

@Component({
  selector: 'app-create-update-ingredient',
  templateUrl: './create-update-ingredient.component.html',
  styleUrls: ['./create-update-ingredient.component.scss'],
})
export class CreateUpdateIngredientComponent implements OnInit {
  form!: FormGroup;
  ingredientId!: string;
  pageMode: PageMode = PageMode.Create;

  pageModeEnum = PageMode;

  constructor(
    private fb: FormBuilder,
    private ingredientSvc: IngredientService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToasterService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.setPageMode();

    if (this.pageMode == PageMode.Edit) {
      this.loadIngredient();
    }
  }

  submit(): void {
    if (this.form.valid) {
      if (this.pageMode == PageMode.Create) {
        this.createIngredient();
      } else {
        //this.updateIngredient();
      }
    }
  }

  //#region Private Functions

  private buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  private setPageMode(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.ingredientId = this.activatedRoute.snapshot.paramMap.get('id');

      this.pageMode = PageMode.Edit;
    }
  }

  private loadIngredient(): void {
    this.ingredientSvc.get(this.ingredientId).subscribe({
      next: (ingredientFromApi: IngredientDetailsDto) => {
        this.form.patchValue(ingredientFromApi);
      },
    });
  }

  private createIngredient(): void {
    this.ingredientSvc.create(this.form.value).subscribe({
      next: (ingredientFromApi: IngredientDetailsDto) => {

        const options: Partial<Toaster.ToastOptions> = {
          messageLocalizationParams: [ingredientFromApi.name],
        };

        this.toaster.success('::CreatedSuccessfully', 'Success', options);
      },
    });
  }

  //#endregion
}
