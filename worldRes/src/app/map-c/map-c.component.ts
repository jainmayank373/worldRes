import { Component, OnInit ,Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-c',
  templateUrl: './map-c.component.html',
  styleUrls: ['./map-c.component.css']
})
export class MapCComponent implements OnInit {

  map: mapboxgl.map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;
  message = 'Hello World!';
  mapData:any;
  // data
  source: any;
  markers: any;
  constructor(private http:HttpClient,private mapService:MapService, public dialogRef: MatDialogRef<MapCComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("This data",data);
    this.mapData = data;
  }

   

  ngOnInit() {
       this.http.post('http://localhost:3000/locate',{"Restaurant ID":this.mapData}).subscribe((result:any)=>{
              
              console.log("MyResult",result[0].Latitude);
              this.lat = result[0].Latitude;
              this.lng = result[0].Longitude;
              this.mapData = result[0];
              this.intializeMap();
        })
  }

  private intializeMap(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{

          this.map.flyTo({
            center:[this.lng,this.lat]
          })

        })
    }
      this.buildMap();
  }

  buildMap(){
        this.map = new mapboxgl.Map({
          container:'map',
          style:this.style,
          zoom:13,
          center:[this.lng,this.lat]
        });
      
  } 
     
};
