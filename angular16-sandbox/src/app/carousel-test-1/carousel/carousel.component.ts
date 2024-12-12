import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  items = [
    // 'https://www.youtube.com/watch?v=ekr2nIex040',
    'assets/images/i1.jpg',
    'assets/images/i2.jpg',
    'assets/images/i3.jpg',
    'assets/images/i4.jpg',
    'assets/images/i5.jpg',
  ];

  imagesNumber: number = 1;
  selectedImage: string | null = null;

  customOptions = {
    // loop: true,
    loop: false,
    margin: 10, // margin between images.
    merge: true,
    stagePadding: 50, // padding between images. I think this one is not important.
    video: true,
    autowidth: true,
    center: false,
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
        items: 5,
      },
    },
    nav: true,
  };

  ngOnInit() {
    this.selectedImage = this.items[0];
  }

  goToImage(i: number) {
    this.imagesNumber = i + 1;
    this.selectedImage = this.items[i];
  }

  prevImage() {
    if (this.imagesNumber > 1) {
      this.imagesNumber--;
      this.selectedImage = this.items[this.imagesNumber - 1];
    }
  }

  nextImage() {
    if (this.imagesNumber < this.items.length) {
      this.imagesNumber++;
      this.selectedImage = this.items[this.imagesNumber - 1];
    }
  }
}
