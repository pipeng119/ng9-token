import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'exe-base', // template will not be inherited
  template: ` <div>exe-base：我是base组件么?</div> `,
})
export class EchartsBase implements OnInit, OnDestroy {
  @Input('obj1')
  set data1(val) {
    console.log(val);
  }

  @Output()
  onClose: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    console.log(12313123);
    console.log('我是基类');
  }
  ngOnDestroy() {
    console.log('haha');
  }
}
