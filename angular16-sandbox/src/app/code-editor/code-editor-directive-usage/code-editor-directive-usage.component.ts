import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code-editor-directive-usage',
  templateUrl: './code-editor-directive-usage.component.html',
  styleUrls: ['./code-editor-directive-usage.component.css'],
})
export class CodeEditorDirectiveUsageComponent {
  @ViewChild('codeEditor', { static: false }) codeEditor!: ElementRef;

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

  data = 'This is a test value for the code editor directive usage component.';
  showSaveMessage = false;

  constructor() {
    const savedValue = sessionStorage.getItem('editorContent');
    if (savedValue) {
      this.data = savedValue;
    }
  }

  saveToSessionStorage() {
    sessionStorage.setItem('editorContent', this.data);
    this.showSaveMessage = true;
    setTimeout(() => (this.showSaveMessage = false), 2000);
  }

  codeChanged(e: any) {
    console.log('Code changed:', e);
  }
}
