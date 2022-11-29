import { Component, Input } from '@angular/core';

@Component({
  selector: 'item',
  template: `
    <div class="draggable" [dndDraggable]="item" dndEffectAllowed="copy">
      {{ item.name }}
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class HelloComponent {
  @Input() item: any;
}
