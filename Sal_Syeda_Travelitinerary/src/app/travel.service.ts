import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentItem } from './helper-files/contentDb';
import { AppMessagesService } from './app-messages.service';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private appMessagesService: AppMessagesService) { }

  getContentItem(): Observable<any[]> {
    this.appMessagesService.addMessage('Content Item loaded!');
    return of(contentItem);
  }
getSingleContentItem(id: number): Observable<any> {
  const item = contentItem.find(content => content.id === id);
  this.appMessagesService.addMessage(`Content Item at id: ${id}`);
  return of(item);
  }

}
