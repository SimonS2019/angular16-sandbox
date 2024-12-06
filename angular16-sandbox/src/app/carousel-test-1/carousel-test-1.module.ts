import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselTest1RoutingModule } from './carousel-test-1-routing.module';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselTest1RoutingModule
  ]
})
export class CarouselTest1Module { }
