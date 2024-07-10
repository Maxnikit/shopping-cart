export type getArrayOfProductNames = () => string[];

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface CartProduct extends Product {
  count: number;
}
export type Rating = {
  rate: number;
  count: number;
};

export type getArrayOfProducts = () => Product[];

export type SearchQuery = string;
