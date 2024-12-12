import { Component } from '@angular/core';
import 'brace';
import 'brace/mode/text';
import 'brace/theme/github';

@Component({
  selector: 'app-code-editor-demo',
  templateUrl: './code-editor-demo.component.html',
  styleUrls: ['./code-editor-demo.component.css']
})
export class CodeEditorDemoComponent {
  config = {
    readOnly: false,
    printMargin: 0, // Change this to a number
    fontSize: 14
  };
  value = 'console.log("Hello, world!");'; // Initialize the value property with some default code
}