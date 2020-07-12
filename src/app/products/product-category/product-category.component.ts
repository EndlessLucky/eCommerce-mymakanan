import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'mymakanan-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  private unsubscribeAll: Subject<any> = new Subject<any>();
  selectedCategory: any;

  constructor(private route: ActivatedRoute, public productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(params => {
      this.selectedCategory= params.category;
    });
  }

}
