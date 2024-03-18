import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { contentItem } from '../helper-files/contentDb';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  ngOnInit() {
    this.contents.forEach(content => content.isSelected = false);
  }
  contents: Content[] =  contentItem;
searchTitle: string = '';
searchResultMessage: string = '';
searchResultColor: string = '';
searchContent() {
  let contentExists = this.contents.some(content => content.title.toLowerCase() === this.searchTitle.toLowerCase());

  if (contentExists) {
    this.searchResultMessage = 'Content item exists!';
    this.searchResultColor = 'green';
    let selectedContent = this.contents.find(content => content.title === this.searchTitle);
    if (selectedContent) {
      selectedContent.isSelected = true;
    }
  } else {
    this.searchResultMessage = 'Content item does not exist!';
    this.searchResultColor = 'red';
  }
}
}
