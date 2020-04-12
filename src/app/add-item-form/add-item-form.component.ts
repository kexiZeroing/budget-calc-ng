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
  @Input() item: BudgetItem = new BudgetItem('', null);

  // create an event emitter (send BudgetItem value)
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);  // can see the submitted value in NgForm object

    // parent component will listen to this event
    this.formSubmit.emit(form.value);
  }
} 
