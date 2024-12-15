import { Component, OnInit } from '@angular/core';
import 'brace';
import 'brace/mode/lua';
import 'brace/theme/tomorrow_night_bright';
import 'brace/ext/language_tools';

import { mockData1 } from '../../../assets/mock-lua/mockData1';
import { mockData2 } from '../../../assets/mock-lua/mockData2';
import { mockData3 } from '../../../assets/mock-lua/mockData3';

@Component({
  selector: 'app-code-editor-demo',
  templateUrl: './code-editor-demo.component.html',
  styleUrls: ['./code-editor-demo.component.css']
})
export class CodeEditorDemoComponent implements OnInit {
  config = {
    readOnly: false,
    printMargin: 100,
    fontSize: 14,
    autoScrollEditorIntoView: true,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    showPrintMargin: true

  };
  value = mockData3.value; // Initialize the value property with mockData1
  showSaveMessage = false;

  ngOnInit() {
    const savedValue = sessionStorage.getItem('editorContent');
    if (savedValue) {
      this.value = savedValue;
    }
  }

  saveToSessionStorage() {
    sessionStorage.setItem('editorContent', this.value);
    this.showSaveMessage = true;
    setTimeout(() => this.showSaveMessage = false, 2000);
  }

  useMockData1() {
    this.value = mockData1.value;
  }

  useMockData2() {
    this.value = mockData2.value;
  }

  useMockData3() {
    this.value = mockData3.value;
  }

  resetEditor() {
    this.value = mockData3.value;
    sessionStorage.removeItem('editorContent');
  }
}