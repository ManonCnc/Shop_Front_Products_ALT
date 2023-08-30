import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { SharedModule } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductAdminComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataViewModule,
    TagModule,
    DropdownModule,
    RatingModule,
    FormsModule,
    AutoCompleteModule,
    PaginatorModule,
    TableModule,
    MultiSelectModule,
    SliderModule,
    ProgressBarModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
  exports: [ProductsComponent,ProductAdminComponent]
  

})
export class ProductModule { }
