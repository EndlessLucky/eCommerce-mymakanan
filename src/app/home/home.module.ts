import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import {OwlModule} from "ngx-owl-carousel";
import { ProductComponent } from './product/product.component';
import {LayoutModule} from "../layout/layout.module";
import { BestValueComponent } from './best-value/best-value.component';
import { CustomProductComponent } from './custom-product/custom-product.component';
import { NewProductComponent } from './new-product/new-product.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, CategoryComponent, ProductComponent, BestValueComponent, CustomProductComponent, NewProductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OwlModule,
    LayoutModule
  ]
})
export class HomeModule { }
