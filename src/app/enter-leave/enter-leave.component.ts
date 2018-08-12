import { Component, Input, Output, EventEmitter} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  keyframes,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-enter-leave',
  templateUrl: './enter-leave.component.html',
  styleUrls: ['./enter-leave.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(100%)'})),
      transition('void => *', [
        animate(500, keyframes([
          style({transform: 'translateX(100%)', offset: 0}),
          style({transform: 'translateX(-15px)',offset: 0.8}),
          style({transform: 'translateX(0)',offset: 1}),
        ])),
      ]),
      transition('* => void', [
        animate('1s 1.4s ease-out', keyframes([
          style({transform: 'translateX(0)', offset: 0}),
          style({transform: 'translateX(100%)',offset: 1}), 
        ])),
      ]),
    ])
  ]
})
export class EnterLeaveComponent {  
  @Input() show:boolean;

  @Output() sendValueToParent = new EventEmitter
  sendToParent(){
    this.sendValueToParent.emit(false)
  }

}
