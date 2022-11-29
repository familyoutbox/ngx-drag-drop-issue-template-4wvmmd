import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DndModule } from 'ngx-drag-drop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DropAreaComponent } from './drop-area/drop-area.component';
import { NestedComponent } from './nested/nested.component';

@NgModule({
  imports: [BrowserModule, DndModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DropAreaComponent,
    NestedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
