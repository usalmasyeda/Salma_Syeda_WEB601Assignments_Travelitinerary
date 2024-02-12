import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  ngOnInit(): void {
    this.contentList = [
      this.contentItem,
      this.contentItem1,
      this.contentItem2,
      this.contentItem3,
      this.contentItem4,
      this.contentItem5,
      this.contentItem6
    ];

    // Initialize isSelected property for each content item
    this.contentList.forEach(item => item.isSelected = false);
  }

  search: string = '';
  contentList: Content[] = [];
  searchResultMessage: string = ''; // Message to display search result
  searchResultColor: string = ''; // Color for search result message
  selectedContent: Content | null = null; // Track the selected content item


  contentItem: Content = {
    id: 1,
    title: 'Paris Adventure',
    description: 'Explore the romantic city of Paris, known for its iconic landmarks such as the Eiffel Tower and Louvre Museum.',
    creator: 'Sal Syeda',
    imgUrl: 'https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg',
    type: 'Proposal',
    tags: ['Paris', 'travel']
  };

  contentItem1: Content = {
    id: 2,
    title: 'Tokyo Escapade',
    description: 'Experience the vibrant culture of Tokyo, from traditional temples to modern tech districts like Akihabara.',
    creator: 'Sal Syeda',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/high-angle-view-of-tokyo-skyline-at-dusk-japan-royalty-free-image-1664309926.jpg',
    type: 'Anime',
    tags: ['Tokyo', 'travel']
  };

  contentItem2: Content = {
    id: 3,
    title: 'New York City Exploration',
    description: 'Discover the city that never sleeps, with its iconic skyline, Broadway shows, and Central Park.',
    creator: 'Sal Syeda',
    imgUrl: 'https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg',
    type: 'Fashion',
    tags: []
  };

  contentItem3: Content = {
    id: 4,
    title: 'Santorini Getaway',
    description: 'Escape to the beautiful Greek island of Santorini, known for its stunning sunsets and white-washed buildings.',
    creator: 'Sal Syeda',
    imgUrl: 'https://images.rove.me/santorini_w1280.jpg',
    type: 'Vacation',
    tags: ['Santorini', 'travel']
  };

  contentItem4: Content = {
    id: 5,
    title: 'Rome Adventure',
    description: 'Immerse yourself in the rich history of Rome, with its ancient ruins, Vatican City, and delicious Italian cuisine.',
    creator: 'Sal Syeda',
    type: '', // Bonus
    tags: []
  };

  contentItem5: Content = {
    id: 6,
    title: 'Bora Bora Paradise',
    description: 'Experience the ultimate tropical getaway in Bora Bora, with overwater bungalows and crystal-clear blue waters.',
    creator: 'Sal Syeda',
    imgUrl: 'https://cdn.voyagerguru.com/wp-content/uploads/2022/04/20220227_PYF_Le-Bora-Bora_203.jpg',
    type: 'travel',
    tags: ['travel']
  };

  contentItem6: Content = {
    id: 7,
    title: 'Marrakech Adventure',
    description: 'Immerse yourself in the vibrant colors and spices of Marrakech, Morocco, exploring its bustling markets and historic palaces.',
    creator: 'Sal Syeda',
    imgUrl: 'https://lp-cms-production.imgix.net/2022-12/GettyImages-1124472714.jpeg?w=600&h=400',
    type: 'food',
    tags: ['Marrakech', 'travel']
  };

  searchByTitle(): void {
    const foundItem = this.contentList.find(item => item.title.toLowerCase() === this.search.toLowerCase());

    if (foundItem) {
      this.searchResultMessage = `Content item with title '${this.search}' exists.`;
      this.searchResultColor = 'green';

      // Check if isSelected property exists before setting it
      if ('isSelected' in foundItem) {
        foundItem.isSelected = true;
      } else {
        console.error('isSelected property is not defined on the found item.');
      }
    } else {
      this.searchResultMessage = `No content item found with title '${this.search}'.`;
      this.searchResultColor = 'red';
    }
  }
}
