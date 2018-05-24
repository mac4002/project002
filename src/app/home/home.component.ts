import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
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
  ngOnInit() {
  }

}





