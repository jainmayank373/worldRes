import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MapCComponent} from '../map-c/map-c.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any
  long:any;
  lat:any;

  constructor(private http:HttpClient,private dialog:MatDialog) { }

  ngOnInit() {
        this.http.get('http://localhost:3000/products').subscribe((result)=>{
              this.products = result;
              console.log(this.products);
            
        })
  }
      openDialog(event){
        console.log(event);
       

        const dialogRef = this.dialog.open(MapCComponent,{
          width:'800px',
          height:'500px',
          data:this.products[event]
        });
        dialogRef.afterClosed().subscribe(result=>{
          console.log("The Dialog");
        })
      }

}
