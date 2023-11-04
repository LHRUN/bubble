export interface ICard {
  name: string;
  previewImage?: string;
  previewComponent?: () => JSX.Element;
  descript: string[];
  github: string;
  example: string;
  category: string[];
}
