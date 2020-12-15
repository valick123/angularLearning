import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments:any[]=[]
  constructor() { }
  getComments():void{
    fetch(`http://jsonplaceholder.typicode.com/comments`)
    .then(response=>response.json())
    .then(data=>{
      data.forEach((item)=>{
        if(item.id<=10){
          this.comments.push(item)
        }
      })
    })
  }
  ngOnInit(): void {
    this.getComments()
  }

}
