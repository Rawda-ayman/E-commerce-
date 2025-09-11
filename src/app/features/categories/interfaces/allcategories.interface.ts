interface allcategories {
  results: number;
  metadata: Metadata;
  data: categorydata[];
}

interface categorydata {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}