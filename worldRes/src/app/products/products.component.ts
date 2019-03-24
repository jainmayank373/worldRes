import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any
  constructor(private http:HttpClient) { }

  ngOnInit() {
        this.http.get('http://localhost:3000/products').subscribe((result)=>{
              this.products = result;
              console.log(this.products);
        })
  }

}
