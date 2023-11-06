export interface ICard {
  name: string;
  previewImage?: string;
  previewComponent?: () => JSX.Element;
  github: string;
  example: string;
  category: string[];
}
