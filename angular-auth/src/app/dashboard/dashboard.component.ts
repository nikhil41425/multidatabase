import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../order.model';
import { OrdersService } from '../orders.service';

declare var M: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public orderService:OrdersService) { }

  order=new Order
  product:any

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
      this.orderService.postOrder(form.value).subscribe((data) => {
          
          this.product=data
          console.log("product",this.product)
      });

   
  }
  

}
