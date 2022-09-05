import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-wrapper',
  templateUrl: './post-wrapper.component.html',
  styleUrls: ['./post-wrapper.component.scss']
})
export class PostWrapperComponent implements OnInit {
  public posts:any;
  public currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
    this.posts=new Array(20);
  }

}
