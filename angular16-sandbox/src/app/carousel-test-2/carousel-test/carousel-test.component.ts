import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-test',
  templateUrl: './carousel-test.component.html',
  styleUrls: ['./carousel-test.component.css'],
})
export class CarouselTestComponent {
  slides = [
    { img: 'https://picsum.photos/200/300?random=1' },
    { img: 'https://picsum.photos/200/300?random=2' },
    { img: 'https://picsum.photos/200/300?random=3' },
    { img: 'https://picsum.photos/200/300?random=4' },
    { img: 'https://picsum.photos/200/300?random=5' },
    { img: 'https://picsum.photos/200/300?random=6' },
    { img: 'https://picsum.photos/200/300?random=7' },
  ];

  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  imagesNumber: number = 1;

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
    this.imagesNumber = e.currentSlide + 1;
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  logImageUrl(url: string) {
    this.imagesNumber = this.slides.findIndex((slide) => slide.img === url) + 1;
    console.log(url);
  }
}
