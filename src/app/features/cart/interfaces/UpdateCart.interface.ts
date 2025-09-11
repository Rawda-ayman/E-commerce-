export interface UpdateCart {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: updatecartData;
}

export interface updatecartData {
  _id: string;
  cartOwner: string;
  products : Products[]; 
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface Products {
  count: number;
  _id: string;
  product:  Product;
  price: number;
}

export interface  Product{
  subcategory: Subcategory[];
  _id: string;
  title: string;
  imageCover: string;
  category: Category;
  brand: Category;
  ratingsAverage: number;
  id: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}