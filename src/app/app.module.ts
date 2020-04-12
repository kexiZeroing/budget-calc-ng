import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import form module (use angular template-driven form) and add it to imports
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],

  // Because MatDialog instantiates components at run-time, the Angular compiler needs extra information to create the necessary ComponentFactory for your dialog content component. 
  // For any component loaded into a dialog, you must include your component class in the list of entryComponents in your NgModule definition so that the Angular compiler knows to create the ComponentFactory for it.
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
