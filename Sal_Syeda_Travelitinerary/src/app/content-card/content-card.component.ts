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
      imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravel.usnews.com%2FParis_France%2FThings_To_Do%2F&psig=AOvVaw2nsoByZqNKOa-VRahp7zeE&ust=1705878639832000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOiH6KyL7YMDFQAAAAAdAAAAABAE',
      type: 'Proposal',
      tags: ['Paris', 'travel']
    });

    this.contentList.add({
      id: 2,
      title: 'Tokyo Escapade',
      description: 'Experience the vibrant culture of Tokyo, from traditional temples to modern tech districts like Akihabara.',
      creator: 'Sal Syeda',
      imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffacts.net%2Fworld%2Fcities%2F45-facts-about-tokyo%2F&psig=AOvVaw1XwEqehyJtajrB91LChFWU&ust=1705878709844000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjC3MeL7YMDFQAAAAAdAAAAABAD',
      type: 'Anime',
      tags: ['Tokyo', 'travel']
    });

    this.contentList.add({
      id: 3,
      title: 'New York City Exploration',
      description: 'Discover the city that never sleeps, with its iconic skyline, Broadway shows, and Central Park.',
      creator: 'Sal Syeda',
      imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.livescience.com%2Fplanet-earth%2Fclimate-change%2Fnew-york-city-may-be-sinking-under-its-own-weight-because-the-buildings-are-too-heavy-scientists-warn&psig=AOvVaw1lCeTGfFG8IK4Qp9gkvyTH&ust=1705878745181000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOiN2dqL7YMDFQAAAAAdAAAAABAD',
      type: 'Fashion',
      tags: ['New York', 'travel']
    });

    this.contentList.add({
      id: 4,
      title: 'Santorini Getaway',
      description: 'Escape to the beautiful Greek island of Santorini, known for its stunning sunsets and white-washed buildings.',
      creator: 'Sal Syeda',
      imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.moon.com%2Ftravel%2Fplanning%2Fa-weekend-in-santorini%2F&psig=AOvVaw1KFOl9Az8Rz94IDyqo60kl&ust=1705878776381000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCgteqL7YMDFQAAAAAdAAAAABAI',
      type: 'Vacation',
      tags: ['Santorini', 'travel']
    });

    this.contentList.add({
      id: 5,
      title: 'Rome Adventure',
      description: 'Immerse yourself in the rich history of Rome, with its ancient ruins, Vatican City, and delicious Italian cuisine.',
      creator: 'Sal Syeda',
      imgUrl: 'https://ca.hotels.com/go/italy/colosseum-rome?intlid=gglist|listitem:image',
      type: 'History',
      tags: ['Rome', 'travel']
    });
  }
  ngOnInit(): void {
    let invalidIndexContent = this.contentList.displayItem(6);
    console.log(invalidIndexContent);
}
}
