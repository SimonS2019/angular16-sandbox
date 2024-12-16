import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeEditorDemoComponent } from './code-editor-demo/code-editor-demo.component';

const routes: Routes = [{ path: '', component: CodeEditorDemoComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class CodeEditorRoutingModule {}
