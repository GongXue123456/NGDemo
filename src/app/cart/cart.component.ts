import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';//导入购物车服务
import { FormBuilder } from '@angular/forms';//导入FormBuilder服务
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;//定义items属性以将产品存储在购物车中。
  checkoutForm;//定义checkoutForm用于存储表单模型属性。
  constructor(
    private cartService: CartService, //注入购物车服务以管理购物车信息。
    private formBuilder: FormBuilder,//注入FormBuilder服务
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }
  onSubmit(customerData) {
    window.alert('your order has been submitted');
    this.items.this.cartService.clearItems();//引用cartService服务清空购物车
    this.checkoutForm.reset();//重置表单
  }
  //使用购物车服务的getItems()方法设置项目

  ngOnInit() {
  }

}
