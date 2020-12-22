import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-commnet-form',
  templateUrl: './add-commnet-form.component.html',
  styleUrls: ['./add-commnet-form.component.css']
})
export class AddCommnetFormComponent implements OnInit {

  constructor() { }
  @Output()
    addComment:EventEmitter<any> = new EventEmitter;
  ngOnInit(): void {
  }
  getNewComment(values,e):void{
    e.preventDefault();
    this.addComment.emit(values);
  }
}
