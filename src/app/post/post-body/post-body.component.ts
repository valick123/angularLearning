import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css']
})
export class PostBodyComponent implements OnInit {

  constructor() { }
  @Input() 
      bodyInfo:any 
  ngOnInit(): void {
    
  }

}
