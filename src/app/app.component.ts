import { Component, OnInit } from '@angular/core';
import {StorageService} from './storage.service';
import {HTTPRequestService} from './httprequest.service';
import {PicsServiceService} from './pics-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public storage: StorageService, private HTTP: HTTPRequestService, private pics: PicsServiceService ){}
  usersInfo: any[] = [];
  postsInfo: any[] = [];
  postList: any[] = [];
  title = 'instagram';
  ngOnInit(): void {
      this.HTTP.getData(`https://jsonplaceholder.typicode.com/posts`,['all'])
        .then(posts=>this.postsInfo = [...posts.filter((post)=>post.id >= 6 ? false : true)])
        .then(()=> this.HTTP.getData(`https://jsonplaceholder.typicode.com/users`, ['id','email','name']))
        .then(users => this.usersInfo = [...users.filter((user)=>user.id >= 6 ? false : true)])
        .then(() => this.pics.getPics('https://picsum.photos/v2/list?limit=6'))
        .then(()=>{
          let result: any[] = []
          this.postsInfo.forEach((post)=>{
            this.usersInfo.forEach((user)=>{
              if(post.id === user.id){
                result.push({
                  id:user.id,
                  author:user.name,
                  img:'',
                  email:user.email,
                  gender:Math.ceil(Math.random() * 10) % 2 === 0 ? 'male' : 'female',
                  likes:Math.ceil(Math.random() * 100),
                  comments:[],
                  postText: post.body,
                  postTitle: post.title,
                })
              }
            })
         })
          this.storage.setData(result,'postList');
        })
        .then(()=> this.HTTP.getData(`https://jsonplaceholder.typicode.com/comments`))
        .then(comments => this.storage.setData(comments.filter((comment)=>comment.postId>=6?false:true),'comments'))
        .then(()=>{
          this.postList = this.storage.getData('postList')
        })
  }
  
}
