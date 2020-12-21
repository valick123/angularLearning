import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {
 
  constructor() { }
 @Output()
  buttonAction:EventEmitter<any>=new EventEmitter
  ngOnInit(): void {
  }
  like():void{
    this.buttonAction.emit()
  }
}
