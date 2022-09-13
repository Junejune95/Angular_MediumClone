import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface Review{
  name:string,
  message:string,
  reviewid:string,
  image:string
}
@Component({
  selector: 'app-ourstory',
  templateUrl: './ourstory.component.html',
  styleUrls: ['./ourstory.component.scss']
})
export class OurstoryComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    navSpeed: 400,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1
      },
     
    },
    nav: false
  }
  
  public people=new Array(12);

  public reviews :Review[]=new Array();

  constructor() { }

  ngOnInit(): void {
    this.reviews=[
      {
        name:'Jasmine Bina',
        message:'Medium is trying to shift the paradigm. They’re catering to those looking for fresh, new, authentic voices. I believe wholeheartedly in their mission.',
        reviewid:'1',
        image:'https://cdn-static-1.medium.com/sites/medium.com/about/images/About_Bina-1.png'
      },
      {
        name:'Joel Leon',
        message:'Medium is trying to shift the paradigm. They’re catering to those looking for fresh, new, authentic voices. I believe wholeheartedly in their mission',
        reviewid:'2',
        image:'https://cdn-static-1.medium.com/sites/medium.com/about/images/About_Bina-1.png'
      },
      {
        name:'Jasmine Bina',
        message:'Medium is a great place to read and learn from a wide range of authors. It’s not muddied up by ads. It feels like one of the few pure places to go online.',
        reviewid:'3',
        image:'https://cdn-static-1.medium.com/sites/medium.com/about/images/About_Colburn-1.png'
      },
      {
        name:'Jackie Colburn',
        message:'There’s no other place that combines such an excellent level of writing with a truly engaged and active community. Medium is truly where ideas are born, shared, and spread.',
        reviewid:'4',
        image:'https://cdn-static-1.medium.com/sites/medium.com/about/images/About_Leon-1.png'
      }
    ]
  }

}
