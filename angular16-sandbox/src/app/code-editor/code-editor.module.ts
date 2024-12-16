import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeEditorRoutingModule } from './code-editor-routing.module';
import { CodeEditorDemoComponent } from './code-editor-demo/code-editor-demo.component';
import { ACE_CONFIG, AceConfigInterface, AceModule } from 'ngx-ace-wrapper';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {
  tabSize: 2,
};
@NgModule({
  declarations: [CodeEditorDemoComponent],
  imports: [CommonModule, CodeEditorRoutingModule, AceModule],
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG,
    },
  ],
})
export class CodeEditorModule {}
