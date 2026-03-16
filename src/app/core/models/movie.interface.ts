export interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
  genre: string;
  img_url: string;
  isLiked?: boolean;
}
