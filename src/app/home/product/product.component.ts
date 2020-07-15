import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../core/service/product.service';

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
      margin: 20,
      dots: false,
      navigation: true,
      nav: true,
      autoplay: true,
      loop: false,
      lazyLoad: true,
      responsive:{
        0:{ items: 1 },
        600:{ items: 3 },
        1000:{ items: 5 }
      }
    };
  }

}
