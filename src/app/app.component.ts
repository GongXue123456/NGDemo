import { Component, Inject, OnInit } from '@angular/core';//引入装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //实例化service
  constructor() { }

  ngOnInit() {
  }

}