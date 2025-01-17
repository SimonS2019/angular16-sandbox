import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import * as ace from 'brace';
import 'brace/theme/tomorrow_night_bright';
import 'brace/theme/tomorrow';
import 'brace/theme/monokai';
import 'brace/theme/github';
import 'brace/mode/lua';
import 'brace/mode/json';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import 'brace/snippets/text';
import 'brace/snippets/lua';
import 'brace/snippets/json';
@Component({
  selector: 'app-code-editor-directive-usage',
  templateUrl: './code-editor-directive-usage.component.html',
  styleUrls: ['./code-editor-directive-usage.component.css'],
})
export class CodeEditorDirectiveUsageComponent
  implements OnInit, AfterViewInit
{
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

  constructor() {}

  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit() {
    this.editorInit();
  }

  getData() {
    const savedValue = sessionStorage.getItem('editorContent');
    if (savedValue) {
      //if there is a saved value in the session storage, use it
      this.data = savedValue;
      const editor = ace.edit('codeEditor');
      editor.setValue(this.data, -1);
    } else {
      //if there is no saved value in the session storage, use the default value
      const editor = ace.edit('codeEditor');
      editor.setValue(this.data, -1);
    }
  }

  editorInit() {
    const editor = ace.edit('codeEditor');
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/lua');
    editor.setOptions(this.config);
    editor.resize(true);
  }

  saveToSessionStorage() {
    sessionStorage.setItem('editorContent', ace.edit('codeEditor').getValue());
    this.showSaveMessage = true;
    setTimeout(() => (this.showSaveMessage = false), 2000);
  }

  codeChanged(e: any) {
    // console.log('Code changed:', e);
    // console.log('Current value:', this.data);
    
  }

  changeTheme(theme: string) {
    const editor = ace.edit('codeEditor');
    editor.setTheme(theme);
  }
  
  onSelectionChange(e: any) {
    // console.log('Selection changed:', e);
  }

  testEnvt(e: any) {
    console.log('Test event:', e);
    
    console.log('Test event:', e);
  }

  testClick(e: any) {
    // console.log('Test click event.');
    // console.log('Test event:', e);
  }

  getEditorValue() {
    const editor = ace.edit('codeEditor');
    console.log('Editor value:', editor.getValue());
  }
}
