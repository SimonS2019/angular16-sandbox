import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeEditorRoutingModule } from './code-editor-routing.module';
import { CodeEditorDemoComponent } from './code-editor-demo/code-editor-demo.component';


@NgModule({
  declarations: [
    CodeEditorDemoComponent
  ],
  imports: [
    CommonModule,
    CodeEditorRoutingModule
  ]
})
export class CodeEditorModule { }
