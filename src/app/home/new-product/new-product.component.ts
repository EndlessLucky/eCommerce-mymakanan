import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../core/service/product.service";

@Component({
  selector: 'mymakanan-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

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
