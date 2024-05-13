import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  allStores: any;
  name="";
  category="";
  errorMessage:any;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getAllStores();
  }

  getAllStores(){
    console.log('called getAllStores' );
    this.http.get('http://localhost:8080/stores/getAll').subscribe((stores) => {
      this.allStores = stores;
      console.log(stores);
    });
  }
  search(){
    console.log("name : " + this.name);
    this.allStores = "";
    console.log('called getByNameAndCategory' );
    this.http.get('http://localhost:8080/stores/getByNameAndCategory?name='+this.name+'&category='+this.category).subscribe((stores) => {
      this.errorMessage = "";
      this.allStores = stores;
      console.log("STORE: "+stores);
    }, error=>{
      console.log("Error: "+error.message);
      this.errorMessage = error.message;
    });
  }

}
