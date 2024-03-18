import { Component } from '@angular/core';
import { TravelService } from './travel.service';
import { contentItem } from './helper-files/contentDb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sal_Syeda_Travelitinerary';
  singleContentItem: any;
  selectedId: number | undefined;
  errorMessage: string | undefined;

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.loadSingleContent(1);
  }

  loadSingleContent(id: number): void {
    this.travelService.getSingleContentItem(id).subscribe(
      item => {
        this.singleContentItem = item;
      },
      error => {
        console.error('Error occurred while loading single content:', error);
      }
    );
  }

  getContentItem(): void {
    if (this.selectedId === undefined || !Number.isInteger(this.selectedId) || this.selectedId <= 0 || this.selectedId > contentItem.length) {
      this.errorMessage = 'Invalid id entered.';
    } else {
      this.errorMessage = '';
      this.loadSingleContent(this.selectedId);
    }
  }
}
