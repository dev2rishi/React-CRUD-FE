/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { API_URL } from "../App";

const Product = ({ item, getProducts }) => {

  const deleteProduct = async(id) => {
    const result = await Swal.fire({
      title: 'Do you really want to delete this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Yes, delete!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    })
    if(result.isConfirmed) {
      try {
        await axios.delete(`${API_URL}/products/${id}`);
        toast.success('Delete a product successfully');
        getProducts();
        
      } catch (error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img src={item.image} className="w-full h-28 object-cover" />
      <div className="px-4 pt-2 pb-4">
        <h2 className="text capitalize font-semibold">{item.name}</h2>
        <div className="text-sm">Quantity: {item.quantity}</div>
        <div className="text-sm">Price: Rs.{item.price}/-</div>
        <div className="mt-2 flex gap-4">
          <Link to={`/edit/${item._id}`}
            className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer ">
            <h2>Edit</h2>
          </Link>
          
          <button onClick={() => deleteProduct(item._id)}
            className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer ">
            <h2>Delete</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
