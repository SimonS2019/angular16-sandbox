import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ngx-owl-carousel-o',
    loadChildren: () =>
      import('./carousel-test-1/carousel-test-1.module').then(
        (m) => m.CarouselTest1Module
      ),
  },
  {
    path: 'ngx-slick-carousel',
    loadChildren: () =>
      import('./carousel-test-2/carousel-test-2.module').then(
        (m) => m.CarouselTest2Module
      ),
  },
  {
    path: 'code-editor',
    loadChildren: () =>
      import('./code-editor/code-editor.module').then(
        (m) => m.CodeEditorModule
      ),
  },

  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
