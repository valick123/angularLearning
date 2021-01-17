import { Component, OnInit, Input } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor(private storage: StorageService) { }
  @Input() postInfo: any;
  post = {
    author: '',
    comments: [],
    email: '',
    gender: '',
    id: 0,
    img: '',
    likes: 0,
    postText: '',
    postTitle: ''
  }
    ngOnInit(): void {
        this.post = Object.assign({}, this.postInfo);
        this.post.comments = [...this.storage.getData('comments').filter((item) => item.postId === this.postInfo.id ? true : false)];
        this.storage.getData('pictures').forEach((pic) => {
          if (pic.id === this.post.id){
            this.post.img = pic.download_url;
          }
        }
      ) 
  }

}
