import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import {OwlModule} from "ngx-owl-carousel";
import { ProductComponent } from './product/product.component';
import {LayoutModule} from "../layout/layout.module";


@NgModule({
  declarations: [HomeComponent, BannerComponent, CategoryComponent, ProductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OwlModule,
    LayoutModule
  ]
})
export class HomeModule { }
