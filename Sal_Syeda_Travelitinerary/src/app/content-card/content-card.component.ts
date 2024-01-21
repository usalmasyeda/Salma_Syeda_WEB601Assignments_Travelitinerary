import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList({
      id: 1,
      title: 'Paris Adventure',
      description: 'Explore the romantic city of Paris, known for its iconic landmarks such as the Eiffel Tower and Louvre Museum.',
      creator: 'Sal Syeda',
      imgUrl: 'https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg',
      type: 'Proposal',
      tags: ['Paris', 'travel']
    });

    this.contentList.add({
      id: 2,
      title: 'Tokyo Escapade',
      description: 'Experience the vibrant culture of Tokyo, from traditional temples to modern tech districts like Akihabara.',
      creator: 'Sal Syeda',
      imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/high-angle-view-of-tokyo-skyline-at-dusk-japan-royalty-free-image-1664309926.jpg',
      type: 'Anime',
      tags: ['Tokyo', 'travel']
    });

    this.contentList.add({
      id: 3,
      title: 'New York City Exploration',
      description: 'Discover the city that never sleeps, with its iconic skyline, Broadway shows, and Central Park.',
      creator: 'Sal Syeda',
      imgUrl: 'https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg',
      type: 'Fashion',
      tags: ['New York', 'travel']
    });

    this.contentList.add({
      id: 4,
      title: 'Santorini Getaway',
      description: 'Escape to the beautiful Greek island of Santorini, known for its stunning sunsets and white-washed buildings.',
      creator: 'Sal Syeda',
      imgUrl: 'https://images.rove.me/santorini_w1280.jpg',
      type: 'Vacation',
      tags: ['Santorini', 'travel']
    });

    this.contentList.add({
      id: 5,
      title: 'Rome Adventure',
      description: 'Immerse yourself in the rich history of Rome, with its ancient ruins, Vatican City, and delicious Italian cuisine.',
      creator: 'Sal Syeda',
      imgUrl: 'https://a.cdn-hotels.com/gdcs/production151/d623/a8b25d0d-64d5-402f-99f5-a58f483c38c6.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      type: 'History',
      tags: ['Rome', 'travel']
    });
  }
  ngOnInit(): void {
    let invalidIndexContent = this.contentList.displayItem(6);
    console.log(invalidIndexContent);
}
}
