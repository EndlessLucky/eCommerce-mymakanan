import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ProductSectionComponent} from "./product-section/product-section.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";


const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    children: [
      {
        path: ':category', component: ProductSectionComponent
      },
      {
        path: ':category/:productTitle', component: ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
