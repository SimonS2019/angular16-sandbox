import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import 'brace';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import 'brace/mode/json';
import 'brace/mode/lua';
import 'brace/snippets/json';
import 'brace/snippets/lua';
import 'brace/snippets/text';
import 'brace/theme/tomorrow';
import 'brace/theme/tomorrow_night_bright';
import * as ace from 'brace';
import { mockData1 } from '../../../assets/mock-lua/mockData1';
import { mockData2 } from '../../../assets/mock-lua/mockData2';
import { mockData3 } from '../../../assets/mock-lua/mockData3';
import { mockDoc1 } from 'src/assets/mock-lua/mockDoc1';

export interface LuaDocItem {
  name: string;
  shortDescription: string;
  example: string;
}

@Component({
  selector: 'app-code-editor-demo',
  templateUrl: './code-editor-demo.component.html',
  styleUrls: ['./code-editor-demo.component.css'],
})
export class CodeEditorDemoComponent implements OnInit, AfterViewInit {
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
  value = mockData3.value; // Initialize the value property with mockData1
  showSaveMessage = false;
  docs = mockDoc1;

  ngOnInit() {
    const savedValue = sessionStorage.getItem('editorContent');
    if (savedValue) {
      this.value = savedValue;
    }
  }

  ngAfterViewInit() {
    this.SetupAutoComplete(this.docs);
  }

  private SetupAutoComplete(docItems: LuaDocItem[]) {
    const motivLuaWordCompleter = {
      items: docItems,

      getCompletions: function (editor:any, session:any, pos:any, prefix:any, callback:any) {
        callback(
          null,
          this.items.map((item: LuaDocItem) => {
            return {
              caption: item.name,
              value: item.name,
              meta: 'function',
              doc: item.shortDescription,
              example: item.example
            };
          })
        );
      },
      getDocTooltip: function (item:any) {
        if ((item.meta === 'function' || item.meta === 'local') && !item.docHTML) {
          // const listItem: LuaDocItem = this.items.find((i: LuaDocItem) => i.name === item.value);
          const listItem: LuaDocItem | undefined = this.items.find((i: LuaDocItem) => i.name === item.value);

          if (!listItem) {
            return;
          }

          item.docHTML = [
            '<b>',
            listItem.name,
            '</b>',
            '<hr></hr>',
            listItem.shortDescription,
            '<p></p><p>Usage: <p></p><i>',
            listItem.example,
            '</i></p>'
          ].join('');
        }
      }
    };
    const langTools = ace.acequire('ace/ext/language_tools');
    langTools.addCompleter(motivLuaWordCompleter);
  }


  private redrawEditor() {
    const editor = ace.edit('codeEditor');
    editor.resize();
    editor.setValue(this.value, -1); // Reapply the value
    editor.setTheme('ace/theme/tomorrow_night_bright'); // Reapply the theme
  }

  testResize() {
    console.log("testResize");
    
    const editor = ace.edit('codeEditor');
    editor.resize(true);
  }

  saveToSessionStorage() {
    sessionStorage.setItem('editorContent', this.value);
    this.showSaveMessage = true;
    setTimeout(() => (this.showSaveMessage = false), 2000);
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
