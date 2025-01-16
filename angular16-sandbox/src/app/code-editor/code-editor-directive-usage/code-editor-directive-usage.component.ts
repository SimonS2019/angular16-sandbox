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
export class CodeEditorDirectiveUsageComponent implements OnInit {
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
    this.getDatafromSessionStorage();
  }

  getDatafromSessionStorage() {
    const savedValue = sessionStorage.getItem('editorContent');
    if (savedValue) {
      this.data = savedValue;
      const editor = ace.edit('codeEditor');
      editor.setValue(this.data, -1);
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
