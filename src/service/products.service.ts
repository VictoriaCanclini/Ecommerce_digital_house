import { Product } from "../interface";

export const getProducts = async (page = 0): Promise<Product[]> => {
  try {
    const response = await fetch(
      `http://localhost:3000/products?_start=${page}&_limit=14`
    );

    console.log(response);

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
