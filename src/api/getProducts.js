import axios from "axios";

export function getAllProducts() {
  return axios.get("https://fakestoreapi.com/products").then((res) => res.data);
}

export function getProductById(id) {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.data);
}
