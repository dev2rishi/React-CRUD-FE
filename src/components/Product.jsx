/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img src={item.image} className="w-full h-auto object-cover" />
      <div className="px-4 pt-2 pb-4">
        <h2 className="text font-semibold">{item.name}</h2>
        <div className="text-sm">Quantity: {item.quantity}</div>
        <div className="text-sm">Price: Rs {item.price}</div>
        <div className="mt-2 flex gap-4">
          <Link to="/edit"
            className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer ">
            <h2>Edit</h2>
          </Link>
          <Link to="/"
            className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer ">
            <h2>Delete</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
