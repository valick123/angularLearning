import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  buttonText = "show comments";
  commentsHide:boolean = true;
  comments:any[]=[];
  showCommentForm:boolean = true;
  constructor() { }
  @Input()
      commentsData:any;
      
  ngOnInit(): void {
    this.comments = this.commentsData;
   
  }
  showComments():void{
    this.commentsHide = !this.commentsHide;
    if(this.commentsHide){
      this.buttonText="show comments";
    } else {
      this.buttonText = "hide comments"
    }
  }
 
  showForm():any{
    this.showCommentForm = !this.showCommentForm;
  }
  getNewComment(data):void{
    this.comments.unshift(data);
    // this.store.addNewComment(data);
  }
}
