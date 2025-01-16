import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditorDirectiveUsageComponent } from './code-editor-directive-usage.component';

describe('CodeEditorDirectiveUsageComponent', () => {
  let component: CodeEditorDirectiveUsageComponent;
  let fixture: ComponentFixture<CodeEditorDirectiveUsageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeEditorDirectiveUsageComponent]
    });
    fixture = TestBed.createComponent(CodeEditorDirectiveUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
