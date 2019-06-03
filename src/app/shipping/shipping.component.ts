import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';////导入购物车服务
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(
    private cartService: CartService,//将购物车服务注入ShippingComponent课程
  ) {//shippingCosts使用getShippingPrices()购物车服务中的方法设置属性
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}
