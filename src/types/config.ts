export interface IComponentCard {
  name: string;
  previewImage?: string;
  previewComponent?: () => JSX.Element;
  github: string;
  example: string;
  category: string[];
}

export interface IProfileCard {
  name: string;
  snapshootTime: string;
  imageUrl: string;
  githubUrl: string;
}
