import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Http } from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mymakanan-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  selectedNation: any;
  selectedRole: any;
  private headers;

  constructor(
    public productService: ProductService,
    public http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.selectedNation = this.productService.nationList[0].nationName;
    this.selectedRole = this.productService.roleList[0].roleName;
  }

  onSubmit(form: NgForm): void{
    this.headers = new Headers({'Content-Type': 'application/json'});
    // if (form.value.address1 === '' || form.value.address2 === '' || form.value.area === '' || form.value.email === ''
    //     || form.value.fullname === '' || form.value.identify === '' || form.value.password === '' || form.value.phonenumber === ''
    //     || form.value.state === ''){
    //   alert('Please input the field');
    //   return;
    // }
    if (form.value.identify.length !== 12 || form.value.identify.substr(6,2) === '00') {
      alert('Please input the correct identification number');
      return;
    }

    // this.http.post('http://127.0.0.1:8000/api/users', form.value).subscribe(res => {
    //   console.log(res);
    // });
  }
}
