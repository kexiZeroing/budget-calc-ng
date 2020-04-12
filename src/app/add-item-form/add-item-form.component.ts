import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  // use [ngModel] in template to bind the model
  @Input() item: BudgetItem;

  // create an event emitter (send BudgetItem value)
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  // differentiate adding and editing
  isNewItem: boolean;

  constructor() { }

  ngOnInit() {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }

  onSubmit(form: NgForm) {
    console.log(form);  // can see the submitted value in NgForm object

    // parent component will listen to this event and receive the passed data
    this.formSubmit.emit(form.value);

    // clear the input
    form.reset();  
  }
} 
