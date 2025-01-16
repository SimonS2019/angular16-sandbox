import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeEditorDemoComponent } from './code-editor-demo/code-editor-demo.component';
import { CodeEditorDirectiveUsageComponent } from './code-editor-directive-usage/code-editor-directive-usage.component';

const routes: Routes = [
  { path: '', component: CodeEditorDemoComponent },
  { path: 'directive-usage', component: CodeEditorDirectiveUsageComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class CodeEditorRoutingModule {}
