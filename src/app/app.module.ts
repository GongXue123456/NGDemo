import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //数据双向绑定需要引用  
import { HttpClientModule } from '@angular/common/http';//导入HttpClientModule,以获取数据并与外部API和资源交互
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component' //请求后台数据
@NgModule({
  declarations: [//声明组件
    AppComponent,
    SimpleFormComponent,
    ProductAlertsComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [//声明service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
