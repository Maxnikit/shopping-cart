import axios from "axios";

export function getProducts() {
  return axios.get("https://fakestoreapi.com/products").then((res) => res.data);
}
