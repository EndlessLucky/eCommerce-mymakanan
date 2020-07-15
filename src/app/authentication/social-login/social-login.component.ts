import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {ProductService} from "../../core/service/product.service";

@Component({
  selector: 'mymakanan-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {

  socialForm: FormGroup = this.fb.group({
    role: ['Supplier', Validators.required],
    nation: ['Malaysia', Validators.required],
  });

  constructor(
    public productService: ProductService,
    private socialAuthService: SocialAuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  signInWithGoogle(): void {
    console.log(this.socialForm.value);
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((res) => {
    //   console.log(res);
    // });
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
