import { Content } from './content-interface';

class ContentList {
  private _items: Content[];
  static contentCount = 0;
  constructor(item: Content) {
    this._items = []; //initialize the array
    this._items[0] = item;
    this.increaseCount();
  }
  get items(): Content[] {
    return this._items;
  }
  increaseCount() {
    return ContentList.contentCount++;
  }
  numberOfItem(): number {
    return this._items.length;
  }
  displayItem(index: number){
    if (index >= 0 && index < this.items.length){
      let conItem = this.items[index];
      // console.log("Title:" + conItem.title);
      // console.log("Description:" + conItem.description);
      // console.log("Creator:" + conItem.creator);
      // console.log("Image URL:" + conItem.imgUrl);
      // console.log("Type:" + conItem.type);
      return `<div
      <h2>${conItem.title}</h2>
      <p>Description: ${conItem.description}</p>
      <p>Creator: ${conItem.creator}</p>
      <p>Type: ${conItem.type}</p>
      <img src = "${conItem.imgUrl}">
      </div>`;
    }
    else {
      return ('Index out of bound');
    }
  }
  add(contentItem: Content){
    this._items.push(contentItem);
  }
}
export { ContentList };
