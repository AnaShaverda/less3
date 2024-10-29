import { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <Product data={product} test="test" />
        </div>
      ))}
    </>
  );
};

export default ProductList;
