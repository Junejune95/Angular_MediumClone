import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-wrapper',
  templateUrl: './trending-wrapper.component.html',
  styleUrls: ['./trending-wrapper.component.scss']
})
export class TrendingWrapperComponent implements OnInit {
  public currentDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
