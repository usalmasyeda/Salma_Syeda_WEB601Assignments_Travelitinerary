// content-card.component.ts
import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content!: any;

  constructor() {}

  displayContentInfo() {
    console.log(`Clicked on Content ID: ${this.content.id}, Title: ${this.content.title}`);
  }
  getCardStyles(): { [key: string]: string } {
    switch (this.content.type) {
      case 'Proposal':
        return { 'border-left': '5px solid #4CAF50' };
      case 'Anime':
        return { 'border-left': '5px solid #2196F3' };
      case 'Fashion':
        return { 'border-left': '5px solid #FFC107' };
      default:
        return {};
    }
  }
}
