export interface ImageData {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

export interface feachImagesData {
  results: ImageData[];
  total_pages: number;
}
