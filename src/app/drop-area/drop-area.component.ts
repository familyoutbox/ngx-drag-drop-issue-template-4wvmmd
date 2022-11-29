import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./../app.component.css']
})
export class DropAreaComponent implements OnInit {
  constructor() {}
  dropedItems = [];
  ngOnInit() {}
  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }
      event.data.index = index;
      list.splice(index, 0, event.data);
    }
    console.log('dropped', JSON.stringify(event, null, 2));
  }
}
