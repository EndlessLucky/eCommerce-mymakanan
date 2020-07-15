import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {ProductService} from "../../core/service/product.service";
import {AuthService} from "../../core/service/auth.service";

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

  isLoading = false;
  payload: any;

  constructor(
    public productService: ProductService,
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  async signInWithGoogle() {
    try {
      this.isLoading = true;
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((res) => {
        this.payload = this.socialForm.value;
        this.payload.phone = '';
        this.payload.password = '';
        this.payload.personalId = '';
        this.payload.name= res.name;
        this.payload.email = res.email;
        this.payload.address1 = '';
        this.payload.address2 = '';
        this.payload.area = '';
        this.payload.state = '';
        this.authService.register(this.payload).toPromise();
        this.authService.isSocial = true;
        this.authService.setAuth(this.payload);
        this.authService.navigateByUserRole(this.payload.role);
      });
    } catch (e) {
      alert(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }

  async signInWithFB() {
    try {
      this.isLoading = true;
      this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((res) => {
        this.payload = this.socialForm.value;
        this.payload.phone = '';
        this.payload.password = '';
        this.payload.personalId = '';
        this.payload.name= res.name;
        this.payload.email = res.email;
        this.payload.address1 = '';
        this.payload.address2 = '';
        this.payload.area = '';
        this.payload.state = '';
        this.authService.register(this.payload).toPromise();
        this.authService.setAuth(this.payload);
        this.authService.navigateByUserRole(this.payload.role);
      });
    } catch (e) {
      alert(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
