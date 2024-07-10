import axios from "axios";

export async function fetchAllProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    // Depending on your use case, you might want to rethrow the error, return a default value, or handle it differently.
    throw error;
  }
}

export function getProductById(id) {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.data);
}

export function getAllCategories() {
  return axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => res.data);
}

export function getInCategory(category) {
  return axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.data);
}

export async function getAllCategoriesWithInfo() {
  try {
    const categories = await getAllCategories();

    const categoriesWithInfo = await Promise.all(
      categories.map(async (category) => {
        const products = await getInCategory(category);
        return { category, products };
      })
    );

    return categoriesWithInfo;
  } catch (error) {
    console.error("Failed to fetch categories with info:", error);
    throw error;
  }
}
