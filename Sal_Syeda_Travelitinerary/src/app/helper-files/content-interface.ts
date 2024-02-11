export interface Content {
  isSelected?: boolean;
  id: number;
  title: string;
  description: string;
  creator: string;
  imgUrl?: string;
  type?: string;
  tags?: string[];
}
