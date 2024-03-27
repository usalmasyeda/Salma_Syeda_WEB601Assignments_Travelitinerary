import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { contentItem } from './helper-files/contentDb';
import { AppMessagesService } from './app-messages.service';
import { Content } from './helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private httpOptions = { headers: new HttpHeaders({ 'Content-type':'application/json' })};
  contentService: any;


  constructor(private http: HttpClient, private appMessagesService: AppMessagesService) { }

  getContentItem() : Observable<Content[]> {
    this.appMessagesService.addMessage('Content Item loaded!');
    return this.http.get<Content[]>('api/content');
  }

  addContent(newContentItem: Content):Observable<Content> {
    return this.http.post<Content>("api/content",
    newContentItem, this.httpOptions);
  }

  addContentToList(newContentItem: Content): void {
    this.contentService.addContent(newContentItem)
    .subscribe ((newContentFromServer: any) =>
      this.addContentToList(newContentFromServer)
      );
  }

  updateContent(contentItem: Content): Observable<any> {
    return this.http.put("api/content", contentItem, this.httpOptions);
  }

  updateContentInList(contentItem: Content): void {
    this.contentService.updateContent(contentItem)
    .subscribe(() =>
    console.log("Content updated successfully")
    );
  }
}
