import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mymakanan-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  options: any;
  loading = true;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.options = {
      dots: false,
      responsive: {
        0: { items: 1, margin: 2 },
        100: { items: 2, margin: 2 },
        200: { items: 3, margin: 2 },
        300: { items: 4, margin: 2 },
        400: { items: 5, margin: 2 },
        500: { items: 6, margin: 2 },
      },
      autoplay: false,
      loop: true,
      autoplayTimeout: 3000,
      lazyLoad: true,
    };
  }

}
