import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/service/auth.service';

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

  isLoading = false;

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
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

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((res) => {
      console.log(res);
    });
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
