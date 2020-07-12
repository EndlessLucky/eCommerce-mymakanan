import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {LayoutModule} from "../layout/layout.module";



@NgModule({
  declarations: [ProductsComponent, ProductCategoryComponent, ProductFilterComponent, ProductSectionComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    LayoutModule
  ]
})
export class ProductsModule { }
