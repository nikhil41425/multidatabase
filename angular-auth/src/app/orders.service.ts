import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  baseURL="http://localhost:3000/orders"

  constructor(private http:HttpClient) { }

  postOrder(order: Order) {
    return this.http.post(`${this.baseURL}/postOrder`, order);
  }
}
