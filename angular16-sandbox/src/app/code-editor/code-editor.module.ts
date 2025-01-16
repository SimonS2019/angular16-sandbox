import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeEditorRoutingModule } from './code-editor-routing.module';
import { CodeEditorDemoComponent } from './code-editor-demo/code-editor-demo.component';
import { ACE_CONFIG, AceConfigInterface, AceModule } from 'ngx-ace-wrapper';
import { CodeEditorDirectiveUsageComponent } from './code-editor-directive-usage/code-editor-directive-usage.component';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {
  tabSize: 4,
};
@NgModule({
  declarations: [CodeEditorDemoComponent, CodeEditorDirectiveUsageComponent],
  imports: [CommonModule, CodeEditorRoutingModule, AceModule],
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG,
    },
  ],
})
export class CodeEditorModule {}
