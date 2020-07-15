import { ProductService } from '../../core/service/product.service';
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
