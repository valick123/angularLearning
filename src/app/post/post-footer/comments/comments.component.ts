import { Component, OnInit, Input } from '@angular/core';
import {faHeart, faComment, faPaperPlane} from "@fortawesome/free-regular-svg-icons"
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
  isLiked: boolean = false;
  faHeart = faHeart;
  faComment = faComment;
  faPaperPlane = faPaperPlane
  constructor() { }
  @Input()
      commentsData:any;
      
  ngOnInit(): void {
    this.comments = this.commentsData.comments;
   
  }
  showComments():void{
    this.commentsHide = !this.commentsHide;
    if(this.commentsHide){
      this.buttonText="show comments";
    } else {
      this.buttonText = "hide comments"
    }
  }
  likePost(btn): void {
    
    console.log(btn)
    if(!this.isLiked){
      this.commentsData.likes++;
      this.isLiked = !this.isLiked;
      btn.classList.remove('btn-link')
      btn.classList.add('btn-danger')
    } else{
       this.commentsData.likes--;
       this.isLiked = !this.isLiked;
       btn.classList.remove('btn-danger')
       btn.classList.add('btn-link')
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
