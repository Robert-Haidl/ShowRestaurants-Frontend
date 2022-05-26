import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = "http://localhost:3001/api/restaurants/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'OKLwnfj348NHFnj', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'})
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any>{
    return this.http.get(AUTH_API+"getRestaurants", httpOptions);
  }

  getRestaurantsByCSV(): Observable<any>{
    return this.http.get('http://localhost:4200/assets/LokaleCSV.csv', {responseType: "text"})
  }
}