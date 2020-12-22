import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor() { }
  @Input()
    likes:any
  ngOnInit(): void {
  }
  likePost():void{
    this.likes++
  } 
}
