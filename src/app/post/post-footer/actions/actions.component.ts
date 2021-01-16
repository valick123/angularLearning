import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  constructor() { }
  @Input()
    likes:any;
    buttonColor:string = "transparent"
    isLiked: boolean = false;
  ngOnInit(): void {
  }
  likePost():void{
    this.isLiked = !this.isLiked;
    if(this.isLiked){
      this.likes++;
    }else{
      this.likes--;
    }
    
  } 
}
