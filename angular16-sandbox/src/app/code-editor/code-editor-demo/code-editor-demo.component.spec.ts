import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditorDemoComponent } from './code-editor-demo.component';

describe('CodeEditorDemoComponent', () => {
  let component: CodeEditorDemoComponent;
  let fixture: ComponentFixture<CodeEditorDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeEditorDemoComponent]
    });
    fixture = TestBed.createComponent(CodeEditorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
