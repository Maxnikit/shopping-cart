import { Product } from "@customTypes/index";

export function sortByRating(array: Product[]): Product[] {
  return array.sort((a, b) => b.rating.rate - a.rating.rate);
}

export function sortByReviewsCount(array: Product[]): Product[] {
  return array.sort((a, b) => b.rating.count - a.rating.count);
}

export function sortByCheapest(array: Product[]): Product[] {
  return array.sort((a, b) => a.price - b.price);
}

export function sortByMostExpensive(array: Product[]): Product[] {
  return array.sort((a, b) => b.price - a.price);
}
