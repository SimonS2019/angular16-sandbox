import { Component, OnInit } from '@angular/core';
import 'brace';
import 'brace/mode/lua'; // Change mode to lua
import 'brace/theme/tomorrow_night_bright'; // Change theme to tomorrow_night_bright
import { mockData1 } from '../../../assets/mock-lua/mockData1'; // Import mockData
import { mockData2 } from '../../../assets/mock-lua/mockData2'; // Import mockData
import { mockData3 } from '../../../assets/mock-lua/mockData3'; // Import mockData

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
  // value = mockData1.value; // Initialize the value property with mockData
  // value = mockData2.value; // Initialize the value property with mockData
  value = mockData3.value; // Initialize the value property with mockData
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