const products = require("../../products.json");
import { Product } from "../types";

export const getProductsByText = (text: string) => {
  const fetchedProducts = products.filter((product: Product) => {
    const { name, categoryName, manufacturerName } = product;
    return (
      name.includes(text) ||
      categoryName.includes(text) ||
      manufacturerName.includes(text)
    );
  });
  return fetchedProducts;
};

export const getProducts = (start: number, end: number) => {
  const productsLength = products.length;
  if (end - 1 > productsLength) {
    end = productsLength;
  }

  return products.slice(start, end);
};

export const getProductById = (id: number) => {
  const fetchedProduct = products.filter(
    (product: Product) => product.id === id
  );
  
  return fetchedProduct.length ? fetchedProduct[0] : {};
};
