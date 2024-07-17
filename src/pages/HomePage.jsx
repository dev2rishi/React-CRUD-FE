import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
const API_URL = "http://localhost:3000/api";

const HomePage = () => {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/products`);
      console.log(response.data);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            {product.length > 0 ? (
              <>
                {product.map((item, index) => {
                 return (
                    <Product item={item} key={index} />
                 )
                })}
              </>
            ) : (
              <div>No products available</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
