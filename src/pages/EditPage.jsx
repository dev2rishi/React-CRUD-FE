import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

import { API_URL } from "../App";


const EditPage = () => {

    let { id } = useParams();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ product, setProduct ] = useState({
        name: "",
        quantity: "",
        price: "",
        image: ""
    });
    const navigate = useNavigate();

    const getProduct = async() => {
        try {
            setIsLoading(true)
            const response = await axios.get(`${API_URL}/products/${id}`);
            setProduct({
                name: response.data.name,
                quantity: response.data.quantity,
                price: response.data.price,
                image: response.data.image
            });
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)
            console.log(error)
           
        }    
    }

   const updateProduct = async(e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            if(!product.name || !product.quantity || !product.price || !product.image) {
                toast.warn('All fields are required and cannot be empty!')
                setIsLoading(false)
                return;
            } else {
                await axios.put(`${API_URL}/products/${id}`, product)
                toast.success('Update a product successfully')
                navigate('/')
            }
        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)
            console.log(error)
        }
   }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
        <h2 className="font-semibold text-2xl mb-4 block text-center">
           Update a Product
        </h2>

        {isLoading ? ("Loading...") : (
            <>
             <form onSubmit={updateProduct}>
           <div className="space-y-2">
           <div>
               <label>Name</label>
               <input 
               type="text"
               value={product.name}
               onChange={(e)=> setProduct({...product, name: e.target.value})}
               className="w-full block border-2 p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-grey-400"
               placeholder="Enter Name"
               />
           </div>
           <div>
               <label>Quantity</label>
               <input 
               type="number"
               value={product.quantity}
               onChange={(e)=> setProduct({...product, quantity: e.target.value})}
               className="w-full block border-2 p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-grey-400"
               placeholder="Enter Quantity"
               />
           </div>
               <div>
               <label>Price</label>
               <input 
               type="number"
               value={product.price}
               onChange={(e)=> setProduct({...product, price: e.target.value})}
               className="w-full block border-2 p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-grey-400"
               placeholder="Enter Price"
               />
           </div>
           <div>
               <label>Image URL</label>
               <input 
               type="url"
               value={product.image}
               onChange={(e)=> setProduct({...product, image: e.target.value})}
               className="w-full block border-2 p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-grey-400"
               placeholder="Enter Image URL"
               />
           </div>
           <div>
               { !isLoading && (
               <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                   Update
               </button>
               )}
           </div>
           </div>
        </form>
            </>
        )}
       
       </div>
   
    )}

export default EditPage