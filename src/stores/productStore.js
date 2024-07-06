import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  removeAllProducts: () => set({ products: 0 }),
  updateProducts: (newProducts) => set({ products: newProducts }),

  getAllProducts: () => {
    const { products } = useProductStore.getState();
    if (!products) return [];
    return products;
  },

  getAllCategories: () => {
    const { products } = useProductStore.getState();
    if (!products) return [{ categoryName: "All", productCount: 0 }];

    // Initialize an object to count products per category
    const categoryCounts = products.reduce((acc, product) => {
      const category = product.category || "No Category"; // Handle products without a category
      acc[category] = (acc[category] || 0) + 1; // Increment category count
      return acc;
    }, {});

    // Calculate the total number of products
    const totalProducts = products.length;

    // Transform the counts object into an array of objects with categoryName and productCount
    const categoriesWithCounts = Object.entries(categoryCounts).map(
      ([category, count]) => ({
        categoryName: category,
        productCount: count,
      })
    );

    // Include the "All" category with the total product count
    return [
      { categoryName: "All", productCount: totalProducts },
      ...categoriesWithCounts,
    ];
  },
  getProductsByCategoryName: (categoryName) => {
    const { products } = useProductStore.getState();
    if (!products) return [];

    return products.filter((product) => product.category === categoryName);
  },

  getArrayOfProductNames: () => {
    const { products } = useProductStore.getState();
    if (!products) return [];
    return products.map((product) => product.title);
  },
}));
