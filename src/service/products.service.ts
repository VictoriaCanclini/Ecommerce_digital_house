import { Product } from "../interface";

const BASE_URL = "https://ecommerce-digital-house.vercel.app";

export const getProducts = async (page = 0): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?_start=${page}&_limit=14`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Faild fetch products");
    }
  } catch (error) {
    throw new Error("Network error");
  }
};

export const createProduct = async (product: Product): Promise<Product> => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Faild to create product");
    }
  } catch (error) {
    throw new Error("Network error");
  }
};
