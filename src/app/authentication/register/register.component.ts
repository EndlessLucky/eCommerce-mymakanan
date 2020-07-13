import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ProductService } from '../../core/service/product.service';
import { AuthService } from '../../core/service/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mymakanan-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  selectedNation: any;
  passport: any;

  isLoading = false;

  form: FormGroup = this.fb.group({
    phone: ['', Validators.required],
    password: ['', Validators.required],
    role: ['Supplier', Validators.required],
    nation: ['Malaysia', Validators.required],
    identify: ['', Validators.required],
    passport: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    address1: ['', Validators.required],
    address2: ['', Validators.required],
    area: ['', Validators.required],
    state: ['', Validators.required]
  });

  constructor(
    public productService: ProductService,
    private authService: AuthService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.register().then(r => console.log(r));
  }

  private async register() {
    try {
      this.isLoading = true;
      const payload = this.form.value;
      if (this.form.value.nation === 'Malaysia'){
        payload.personalId = this.form.value.identify;
      }else{
        payload.personalId = this.form.value.passport;
      }

      // this.authService.register(payload).toPromise();
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}
