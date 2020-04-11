import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  // input decorator from @angular/core, create a property that can be input into the component using property binding (given from parent)
  @Input() isIncome: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
