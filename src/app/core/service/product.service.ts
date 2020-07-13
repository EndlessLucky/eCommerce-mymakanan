import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  nationList = [
    {
      nationName: 'Malaysia'
    },
    {
      nationName: 'Foreigner'
    }
  ];

  roleList = [
    {
      roleName: 'Supplier'
    },
    {
      roleName: 'Customer'
    }
  ];

  bannerList = [
    {
      bannerImg: './assets/images/banners/offer-1.jpg',
      bannerTitle: 'banner1',
    },
    {
      bannerImg: './assets/images/banners/offer-2.jpg',
      bannerTitle: 'banner2',
    },
    {
      bannerImg: './assets/images/banners/offer-3.jpg',
      bannerTitle: 'banner3',
    },
    {
      bannerImg: './assets/images/banners/offer-4.jpg',
      bannerTitle: 'banner4',
    },
    {
      bannerImg: './assets/images/banners/offer-5.jpg',
      bannerTitle: 'banner5',
    }
  ];

  categoryList = [
    {
      categoryImg: './assets/images/category/icon-1.svg',
      categoryTitle: 'Meat',
    },
    {
      categoryImg: './assets/images/category/icon-2.svg',
      categoryTitle: 'Vegetables',
    },
    {
      categoryImg: './assets/images/category/icon-3.svg',
      categoryTitle: 'Fruits',
    },
    {
      categoryImg: './assets/images/category/icon-4.svg',
      categoryTitle: 'Drink',
    },
    {
      categoryImg: './assets/images/category/icon-5.svg',
      categoryTitle: 'Crops',
    },
    {
      categoryImg: './assets/images/category/icon-6.svg',
      categoryTitle: 'Bread',
    },
  ];

  productList = [
    {
      productImg: './assets/images/category/icon-1.svg',
      categoryTitle: 'Meat',
      productTitle: 'Meat01',
      productPrice: '$10'
    },
    {
      productImg: './assets/images/category/icon-7.svg',
      categoryTitle: 'Meat',
      productTitle: 'Meat02',
      productPrice: '$15'
    },
    {
      productImg: './assets/images/category/icon-2.svg',
      categoryTitle: 'Vegetables',
      productTitle: 'Vegetables01',
      productPrice: '$20'
    },
    {
      productImg: './assets/images/category/icon-3.svg',
      categoryTitle: 'Fruits',
      productTitle: 'Fruits01',
      productPrice: '$30'
    },
    {
      productImg: './assets/images/category/icon-4.svg',
      categoryTitle: 'Drink',
      productTitle: 'Drink01',
      productPrice: '$40'
    },
    {
      productImg: './assets/images/category/icon-5.svg',
      categoryTitle: 'Crops',
      productTitle: 'Crops01',
      productPrice: '$50'
    },
    {
      productImg: './assets/images/category/icon-6.svg',
      categoryTitle: 'Bread',
      productTitle: 'Bread01',
      productPrice: '$60'
    },
  ];

  products: any[] = [];
  categoryParam: any;
  titleParam: any;
  public resultUpdater$: Subject<any> = new Subject<any>();

  constructor() { }

  getProductsByCategory(category): void {
    this.products = this.productList.filter(x => x.categoryTitle === category);
    this.titleParam = '';
  }

  getProductDetailByTitle(productTitle): void{
    const tempProducts = this.productList.filter(x => x.categoryTitle === this.categoryParam);
    this.products = tempProducts.filter(x => x.productTitle === productTitle);
    this.titleParam = productTitle;
  }

  setCategoryParam(category): void{
    this.categoryParam = category;
  }
}
