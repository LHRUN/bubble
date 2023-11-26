export interface IComponentCategory {
  id: string;
  name: string;
}

export interface IComponent {
  id: string;
  name: string;
  previewImage?: string;
  previewComponent?: string;
  github: string;
  example: string;
  category: string[];
  likes: number;
}

export interface IProfile {
  id: string;
  name: string;
  snapshootTime: string;
  imageUrl: string;
  githubUrl: string;
  likes: number;
}

export interface IUser {
  userId?: string;
  name?: string;
  email?: string;
  image?: string;
}
