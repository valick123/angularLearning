import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post:any = {
    author:"valick123",
    gender:"male",
    img:"",
    likes:10,
    comments:[]
  }
  title = 'instagram';
  ngOnInit(): void {
    fetch(`http://jsonplaceholder.typicode.com/comments?postId=1`)
    .then(response=>response.json())
    .then(data=>{
      this.post.comments.push(...data);
    })
    fetch(`https://picsum.photos/200`)
    .then(response=>{
     this.post.img = response.url;
    })
  }

}
