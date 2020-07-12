import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Http } from '@angular/http';
import {HttpClient} from "@angular/common/http";

@Component({
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
    console.log(form.value);
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('http://127.0.0.1:8000/api/users', form.value).subscribe(res => {
      console.log(res);
    });
  }
}
