import { Component, Input, OnInit } from '@angular/core';
import { EchartsBase } from '../common/echarts-base-class';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent extends EchartsBase implements OnInit {
  msg;

  @Input('obj')
  set data(value) {
    if (value) {
      this.msg = value;
      Object.defineProperty(this.msg, 'b', {
        get() {
          return
        },
        set(val) {
          console.log(val)
        },
      });
    }
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    // console.log('我是子类')
  }
}
