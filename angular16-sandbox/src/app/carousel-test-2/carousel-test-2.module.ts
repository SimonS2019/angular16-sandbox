import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselTest2RoutingModule } from './carousel-test-2-routing.module';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';


@NgModule({
  declarations: [
    CarouselTestComponent
  ],
  imports: [
    CommonModule,
    CarouselTest2RoutingModule
  ]
})
export class CarouselTest2Module { }
