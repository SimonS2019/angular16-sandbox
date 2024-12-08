import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';

const routes: Routes = [
  {
    path: '', component: CarouselTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselTest2RoutingModule { }