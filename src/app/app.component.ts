import { Component } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost
    effectAllowed: 'all',
    disable: false,
    handle: false
  };
  listItems = [
    { id: 1, name: 'item1', children: [] },
    { id: 2, name: 'item2', children: [] }
  ];
  dropedItems = [];
  // onDragStart(event: DragEvent) {
  //   console.log('drag started', JSON.stringify(event, null, 2));
  // }

  // onDragEnd(event: DragEvent) {
  //   console.log('drag ended', JSON.stringify(event, null, 2));
  // }

  // onDraggableCopied(event: DragEvent) {
  //   console.log('draggable copied', JSON.stringify(event, null, 2));
  // }

  // onDraggableLinked(event: DragEvent) {
  //   console.log('draggable linked', JSON.stringify(event, null, 2));
  // }

  // onDraggableMoved(event: DragEvent) {
  //   console.log('draggable moved', JSON.stringify(event, null, 2));
  // }

  // onDragCanceled(event: DragEvent) {
  //   console.log('drag cancelled', JSON.stringify(event, null, 2));
  // }

  // onDragover(event: DragEvent) {
  //   console.log('dragover', JSON.stringify(event, null, 2));
  // }

  onDrop(event: DndDropEvent) {
    if (event && event.data) {
      this.dropedItems.push(event.data);
    }
    console.log('dropped', JSON.stringify(event, null, 2));
  }
}
