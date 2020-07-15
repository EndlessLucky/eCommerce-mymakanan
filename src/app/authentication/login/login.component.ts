import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/service/auth.service';
import {ProductService} from "../../core/service/product.service";

@Component({
  selector: 'mymakanan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    phone: ['', Validators.required],
    password: ['', Validators.required]
  });

  socialForm: FormGroup = this.fb.group({
    role: ['Supplier', Validators.required],
    nation: ['Malaysia', Validators.required],
  });

  isLoading = false;

  constructor(
    private authService: AuthService,
    public productService: ProductService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  async login() {
    try {
      this.isLoading = true;
      const payload = this.form.value;
      await this.authService.login(payload).toPromise();
      const token = await this.authService.decodeToken();
      this.authService.navigateByUserRole(token.role);
      alert(`You've successfully logged in.`)
    } catch (e) {
      alert(`Invalid email or password. Please try again.`);
    } finally {
      this.isLoading = false;
    }
  }
}
