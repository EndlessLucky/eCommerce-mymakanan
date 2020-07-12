import { ProductService } from './../../service/product.service';
import { Component, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mymakanan-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{

  options: any;

  constructor(public productService: ProductService ) { }

  ngOnInit(): void {
    this.options = {
      dots: false,
      responsive: {
        0: { items: 1, margin: 20 },
        100: { items: 2, margin: 20 },
        200: { items: 3, margin: 20 },
        300: { items: 4, margin: 20 },
        400: { items: 5, margin: 20 }
      },
      autoplay: true,
      loop: true,
      autoplayTimeout: 5000,
      lazyLoad: true,
    };
  }
}
