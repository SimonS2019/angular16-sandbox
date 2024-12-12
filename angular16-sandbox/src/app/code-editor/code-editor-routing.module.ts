import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeEditorDemoComponent } from './code-editor-demo/code-editor-demo.component';
import { ACE_CONFIG, AceConfigInterface, AceModule } from 'ngx-ace-wrapper';

const routes: Routes = [{ path: '', component: CodeEditorDemoComponent }];
const DEFAULT_ACE_CONFIG: AceConfigInterface = {
  tabSize: 2,
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,AceModule],
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG
    }
  ]
})
export class CodeEditorRoutingModule {}
