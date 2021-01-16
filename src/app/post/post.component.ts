import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 
  constructor() { }
  @Input() 
  postInfo:any

  ngOnInit(): void {
    // fetch(`https://picsum.photos/v2/list?limit=10`)
    //   .then((response => response.json()))
    //   .then((data) => console.log(data));
    // console.log(`postInfo: `, this.postInfo, `\nfrom post.component`);
  }

}
