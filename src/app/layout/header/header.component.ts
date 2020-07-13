import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../core/service/product.service";
import { AuthService } from '../../core/service/auth.service';
import { User } from '../../core/models/auth';

@Component({
  selector: 'mymakanan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$ = this.authService.user$;

  constructor(public productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user$.subscribe(res => console.log(res));
  }

}
