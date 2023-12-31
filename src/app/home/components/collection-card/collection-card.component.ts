import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent {
  @Input() index = 0;
  @Input() frontImageLink = '';
  @Input() backImageLink = '';
}
