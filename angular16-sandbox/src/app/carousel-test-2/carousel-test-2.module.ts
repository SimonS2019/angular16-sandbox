import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselTest2RoutingModule } from './carousel-test-2-routing.module';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    CarouselTestComponent
  ],
  imports: [
    CommonModule,
    CarouselTest2RoutingModule,
    SlickCarouselModule 
  ]
})
export class CarouselTest2Module { }
