export interface Content {
  isSelected?: boolean;
  id: null | number;
  title: string;
  description: string;
  creator: string;
  imgUrl?: string;
  type?: string;
  tags?: string[];
}
