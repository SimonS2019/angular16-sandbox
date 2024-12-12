import { Component, OnInit } from '@angular/core';
import 'brace';
import 'brace/mode/text';
import 'brace/theme/github';

@Component({
  selector: 'app-code-editor-demo',
  templateUrl: './code-editor-demo.component.html',
  styleUrls: ['./code-editor-demo.component.css']
})
export class CodeEditorDemoComponent implements OnInit {
  config = {
    readOnly: false,
    printMargin: 0, // Change this to a number
    fontSize: 14
  };
  value = 'console.log("Hello, world!");'; // Initialize the value property with some default code
  showSaveMessage = false; // Add a property to control the visibility of the save message

  ngOnInit() {
    const savedValue = sessionStorage.getItem('editorContent');
    if (savedValue) {
      this.value = savedValue;
    }
  }

  saveToSessionStorage() {
    sessionStorage.setItem('editorContent', this.value);
    this.showSaveMessage = true; // Show the save message
    setTimeout(() => this.showSaveMessage = false, 2000); // Hide the save message after 2 seconds
  }
}