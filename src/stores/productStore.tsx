import { create } from "zustand";
import { Product } from "types";

interface ProductState {
  products: Product[];

  removeAllProducts: () => void;
  updateProducts: (newProducts: Product[]) => void;
  getAllProducts: () => Product[] | [];
  getProductByName: (productName: string) => Product | undefined;
  getAllCategories: () => { categoryName: string; productCount: number }[];
  getProductsByCategoryName: (categoryName: string) => Product[] | [];
  getArrayOfProductNames: () => string[];
}

export const useProductStore = create<ProductState>()((set, get) => ({
  products: [],

  removeAllProducts: () => set({ products: [] }),

  updateProducts: (newProducts) => {
    // Ensure newProducts is an array before updating
    if (Array.isArray(newProducts)) {
      set({ products: newProducts });
    } else {
      console.warn(
        "Attempted to update products with a non-array value",
        newProducts
      );
      // Optionally, set products to an empty array or handle the error as needed
      // set({ products: [] });
    }
  },
  getAllProducts: () => {
    const { products } = get();
    return products;
  },
  // getAllProducts: (): Product[] => {
  //   const { products } = useProductStore.getState();
  //   if (!products) return [];
  //   return products;
  // },

  getProductByName: (productName) => {
    const { products } = get();
    if (!products) return undefined;
    return products.find((product) => product.title === productName);
  },

  // getProductByName: (productName) => {
  //   const { products } = useProductStore.getState();
  //   if (!products) return [];
  //   return products.find((product) => product.title === productName);
  // },

  getAllCategories: () => {
    const { products } = get();
    if (!products) return [{ categoryName: "all", productCount: 0 }];
    // console.log(products);
    // Initialize an object to count products per category
    const categoryCounts = products.reduce(
      (acc: { [key: string]: number }, product: Product) => {
        const category = product.category || "No Category"; // Handle products without a category
        acc[category] = (acc[category] || 0) + 1; // Increment category count
        return acc;
      },
      {}
    );

    // Calculate the total number of products
    const totalProducts: number = products.length;

    // Transform the counts object into an array of objects with categoryName and productCount
    const categoriesWithCounts = Object.entries(categoryCounts).map(
      ([category, count]) => ({
        categoryName: category,
        productCount: count,
      })
    );

    // Include the "all" category with the total product count
    // console.log(
    //   "end",
    //   categoriesWithCounts.map((c) => c.categoryName)
    // );
    return [
      { categoryName: "all", productCount: totalProducts },
      ...categoriesWithCounts,
    ];
  },
  getProductsByCategoryName: (categoryName) => {
    const { products } = get();
    if (!products) return [];

    return products.filter((product) => product.category === categoryName);
  },

  getArrayOfProductNames: () => {
    const { products } = get();
    if (!products) return [];
    return products.map((product) => product.title);
  },
}));
