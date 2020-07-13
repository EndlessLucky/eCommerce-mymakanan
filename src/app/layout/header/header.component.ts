import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../core/service/product.service";

@Component({
  selector: 'mymakanan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

}
