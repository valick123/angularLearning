import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {

  constructor() { }
  @Input()
    headerInfo:any
  ngOnInit(): void {
  }

}
