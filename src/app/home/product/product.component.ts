import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mymakanan-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  options: any;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.options = {
      dots: false,
      responsive: {
        0: { items: 1, margin: 5 },
        100: { items: 2, margin: 5 },
        200: { items: 3, margin: 5 },
        300: { items: 4, margin: 5 },
      },
      autoplay: false,
      loop: false,
      autoplayTimeout: 3000,
      lazyLoad: true,
    };
  }

}
