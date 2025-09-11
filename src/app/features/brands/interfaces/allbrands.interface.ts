
export interface AllbrandsInterface {
  results: number;
  metadata: Metadata;
  data: brandsdata[];
}

export interface brandsdata{
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}