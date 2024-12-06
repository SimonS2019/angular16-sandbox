import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselTest1RoutingModule } from './carousel-test-1-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselTest1RoutingModule,
    CarouselModule ,
    
  ]
})
export class CarouselTest1Module { }
