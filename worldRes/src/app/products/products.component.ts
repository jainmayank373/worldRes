import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [{
    title:"Hello",
    dish:"Punjabi"
  },{

    title:"Hello",
    dish:"Punjabi"
  },{

    title:"Hello",
    dish:"Punjabi"
  },{
    title:"Hello",
    dish:"Punjabi"
  },{

    title:"Hello",
    dish:"Punjabi"
  },{

    title:"Hello",
    dish:"Punjabi"
  }]
  constructor() { }

  ngOnInit() {
  }

}
