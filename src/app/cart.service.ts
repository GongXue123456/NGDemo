import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//引入HttpClient以获取购物车服务
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(
    private http: HttpClient //注入组件类HttpClient的构造函数CartService
  ) { }
  //添加到购物车
  addToCart(product) {
    this.items.push(product)
  }
  //返回购物车项目
  getItems() {
    return this.items;
  }
  //清除购物车
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {//使用该HttpClient#get()方法检索出货数据（类型和价格）
    return this.http.get('/assets/shipping.json')
  }
}
