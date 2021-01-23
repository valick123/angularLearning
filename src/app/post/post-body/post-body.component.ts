import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css']
})
export class PostBodyComponent implements OnInit {
  faEnvelope = faEnvelope;
  constructor() { }
  @Input() 
      bodyInfo:any 
  ngOnInit(): void {
    
  }

}
