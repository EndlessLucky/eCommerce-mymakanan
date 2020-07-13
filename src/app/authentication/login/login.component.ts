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
      const res = await this.authService.login(payload).toPromise();
      console.log(res);
    } catch (e) {
      alert('Please input the correct phone number and password');
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
