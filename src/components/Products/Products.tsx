import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
type Products = {
  title: string;
  description: string;
  price: number;
  stock: number;
};

function useGetProducts(id: string) {
  const [products, setProducts] = useState<Products[] | null>(null);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(`https://localhost:7080/Catalog/${id}`);
      const result = await response.json();

      setProducts(result);
    }
    getProducts();
  }, [id]);

  return products;
  console.log("Product:" + products);
}
type ProductsParams = {
  id: string;
};

const Products = () => {
  const params = useParams() as ProductsParams;
  const products = useGetProducts(params.id);
  console.log(products);
  return <>Products</>;
};

export default Products;
