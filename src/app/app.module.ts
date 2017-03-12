import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BaseService } from './base.service';
import { TodoService } from './todo.service';
import { ItemService } from './item.service';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    BaseService,
    TodoService,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }