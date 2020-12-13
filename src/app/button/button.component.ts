import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonText:string;
  @Output() parentFunction:EventEmitter<T> = new EventEmitter;
  constructor() { }
    chiltText:string = 'Child compoent button was pressed'
  ngOnInit(): void {
    console.log(this.buttonText)
  }
  showAlert(data):any
{
  this.parentFunction.emit(data)
}
}
