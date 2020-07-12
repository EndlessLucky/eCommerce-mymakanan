import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'mymakanan-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  private unsubscribeAll: Subject<any> = new Subject<any>();
  selectedCategory: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(params => {
      this.selectedCategory= params.category;
    });
  }

}
