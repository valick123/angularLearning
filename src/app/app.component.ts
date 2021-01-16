import { Component, OnInit } from '@angular/core';
import {StorageService} from './storage.service';
import {HTTPRequestService} from './httprequest.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private storage: StorageService, private HTTP: HTTPRequestService){}
  rawUserInfo: any[] = [];
  rawPostInfo: any[] = [];  
  postList: any[] = [];
  title: string = 'instagram';
  ngOnInit(): void {
      this.HTTP.getData(`https://jsonplaceholder.typicode.com/posts`,['all'])
        .then(posts=>this.rawPostInfo = [...posts.filter((post)=>post.id >= 11 ? false : true)])
        .then(()=> this.HTTP.getData(`https://jsonplaceholder.typicode.com/users`, ['id','email','name']))
        .then(users => this.rawUserInfo = [...users.filter((user)=>user.id >= 11 ? false : true)])
        .then(()=>{
          let result: any[] = []
          this.rawPostInfo.forEach((post)=>{
            this.rawUserInfo.forEach((user)=>{
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
        .then(comments => this.storage.setData(comments.filter((comment)=>comment.postId>=11?false:true),'comments'))
        .then(()=>{
          console.log(`posts list: `, this.storage.getData('postList'), `\nfrom app.component`);
          console.log(`comments list: `, this.storage.getData('comments'), `\nfrom app.component`);
        })
        .then(()=> this.HTTP.getData(`https://picsum.photos/v2/list?limit=30`,['id','download_url']))
        .then((pics)=>{
          console.log(pics);
        })
  }
  
}
