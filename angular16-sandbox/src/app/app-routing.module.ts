import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'carousel-test-1',
    loadChildren: () =>
      import('./carousel-test-1/carousel-test-1.module').then(
        (m) => m.CarouselTest1Module
      ),
  },
  {
    path: 'carousel-test-2',
    loadChildren: () =>
      import('./carousel-test-2/carousel-test-2.module').then(
        (m) => m.CarouselTest2Module
      ),
  },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
