import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {ProductService} from "../../core/service/product.service";

@Component({
  selector: 'mymakanan-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit, OnDestroy {

  private unsubscribeAll: Subject<any> = new Subject<any>();
  products: any[] = [];

  constructor(private route: ActivatedRoute, public productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(params => {
      this.productService.getProductsByCategory(params.category);
      this.productService.setCategoryParam(params.category);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
