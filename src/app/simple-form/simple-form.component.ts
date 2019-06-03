import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
   @Input() message;
   @Output() update =new EventEmitter();
   isMousedown=false;
  constructor() { 
    // setInterval(()=>{
    //   this.message = Math.random().toString()
    // },2000)
  }

  ngOnInit() {
  }
  onclick(event,value) {
    console.log(event)
    console.log(value)
  }
}
