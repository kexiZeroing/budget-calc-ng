import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  // parent give this array (don't need to new Array here)
  @Input() budgetItems: BudgetItem[];
  // deliver to parent
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  // inject dialog to the component
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteButtonClicked(item: BudgetItem) {
    // the delete event need to be continuously passed to the main component to change the original array 
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem) {
    // create the dialog with the corresponding component and data
    // assign component loaded into a dialog
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    // subscribe the dialog close and submit an update event to the parent
    // dialog close event: this.dialogRef.close(updatedItem) in edit-item-modal
    dialogRef.afterClosed().subscribe(res => {
      res && this.update.emit({
        old: item,
        new: res
      });
    })
  }
}

// describe the new type of object
export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
