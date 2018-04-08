import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
         MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
         MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
         MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule, MatCheckboxModule, MatCheckbox } from '@angular/material';

import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
         CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
         CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule } from '@covalent/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main.component';
import { EventListComponent } from './events/event-list.component';
import { EventCardComponent } from './events/event-card.component';
import { EventFiltersComponent } from './events/filters/event-filters.component';
import { EventService } from './services/event/event.service';
import { EventTypeService } from './services/eventTypes/event-type.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpModule,
    HttpClientModule,
    JsonpModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    /** Ours */
    AppRoutingModule
    ],
  declarations: [ 
    AppComponent,
    MainComponent,
    EventListComponent, 
    EventCardComponent,
    EventFiltersComponent ],
  providers: [ EventService, EventTypeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
