import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewComponent } from './new/new.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  imports:      [ 
                  BrowserModule, 
                  BrowserAnimationsModule,
                  FormsModule, 
                  TooltipModule.forRoot(),
                  BsDatepickerModule.forRoot()       
                  ],
  declarations: [ AppComponent, UserListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
