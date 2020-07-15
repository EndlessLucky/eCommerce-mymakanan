import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../core/service/product.service';

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
      margin: 20,
      dots: false,
      navigation: true,
      nav: true,
      autoplay: true,
      loop: false,
      lazyLoad: true,
      responsive:{
        0:{ items: 2 },
        600:{ items: 3 },
        1000:{ items: 5 }
      }
    };
  }

}
