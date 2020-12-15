import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  data:any[] = []
  constructor() { }
  getPic():any{
    fetch(`https://picsum.photos/200`)
    .then(response=>{
      this.data.push(response)
      console.log(this.data[0].url)
    })
   
  }

  ngOnInit(): void {
    this.getPic()

  }

}
