import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { contentItem } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const content: Content[] = contentItem;
    return {content};
  }
  constructor() { }
}
