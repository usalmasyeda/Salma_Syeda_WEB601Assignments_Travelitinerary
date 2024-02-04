import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTagged'
})
export class ContentTaggedPipe implements PipeTransform {

  transform(contentArray: Content [], tag: string ): Content[] {
    return contentArray.filter((content) => content.tags?.includes(tag));

 }

}
