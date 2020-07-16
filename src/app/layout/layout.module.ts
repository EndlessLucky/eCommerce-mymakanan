import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ResponsiveModule} from "ngx-responsive";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const config = {
  breakPoints: {
    xs: {max: 600},
    sm: {min: 601, max: 959},
    md: {min: 960, max: 1279},
    lg: {min: 1280, max: 1919},
    xl: {min: 1920}
  },
  debounceTime: 100
};

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
      CommonModule,
      RouterModule,
      ResponsiveModule.forRoot(config)
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
