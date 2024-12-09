import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  items = [
    'https://picsum.photos/600/800?random=1',
    'https://picsum.photos/600/800?random=2',
    // 'https://picsum.photos/600/800?random=3',
    // 'https://picsum.photos/600/800?random=4',
    // 'https://picsum.photos/600/800?random=5',
    // 'https://picsum.photos/600/800?random=6',
    // 'https://picsum.photos/600/800?random=7',
  ];

  imagesNumber : number = 1;
  selectedImage: string | null = null;

  customOptions = {
    loop: true,
    margin:10, // margin between images. 
    merge:true,
    stagePadding: 50, // padding between images. I think this one is not important.

    center:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit() {
    this.selectedImage = this.items[0];
  }

  logImageUrl(url: string) {
    this.imagesNumber = this.items.indexOf(url) + 1;
    this.selectedImage = url;
    console.log(url);
  }
}
