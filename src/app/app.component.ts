import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title: string;
  isEditable: boolean;
  editableClasses: Object;

  constructor() {
    this.title = 'my title';
    this.isEditable = false;
    this.editableClasses = {
      'editable' : false,
      'hover' : false
    };
  }

  protected toggleEdit() {
    this.isEditable = !this.isEditable;
    this.editableClasses = {
      'editable' : this.isEditable,
      'hover' : false
    };
  }
}
