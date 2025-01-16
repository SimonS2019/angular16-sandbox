import { Component } from '@angular/core';

@Component({
  selector: 'app-code-editor-directive-usage',
  templateUrl: './code-editor-directive-usage.component.html',
  styleUrls: ['./code-editor-directive-usage.component.css'],
})
export class CodeEditorDirectiveUsageComponent {
  config = {
    // readOnly: false,
    // printMargin: 100,
    // fontSize: 14,
    autoScrollEditorIntoView: true,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    showPrintMargin: false,
  };

  value = 'This is a test value for the code editor directive usage component.';
  showSaveMessage = false;

  constructor() {}

  saveToSessionStorage() {
    sessionStorage.setItem('editorContent', this.value);
    this.showSaveMessage = true;
    setTimeout(() => (this.showSaveMessage = false), 2000);
  }

  codeChanged(value: any) {
    console.log('Code changed:', value);
  }
}
