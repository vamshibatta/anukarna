import axios from "axios";
import { useState } from "react";
import './ProductCard.css';
import UpdateProduct from "./UpdateProduct";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import Swal from 'sweetalert2';


function SingleCard({ items }: { items: any }) {
    const [quantity, setQuantity] = useState(0);

    let token: string = localStorage.getItem('auth-token') ?? "";

    const handelAddCart = (name: string) => {
        const data = { name, quantity: 1 };
        axios({
            method: 'post',
            url: 'http://localhost:4000/api/cart/add',
            headers: {
                'auth-token': token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
        .then((res: any) => {
            setQuantity(1);
            Swal.fire({
                title: `Added ${res.data}.`,
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#e87a04'
            })
            console.log(quantity);
            })
            .catch((error: any) => {
                console.log(error);
            })
    }

    const loginFirst = () => {
        Swal.fire({
            title: 'Please login with your account to add to your cart!!',
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#e87a04'
        })
    }

    return (
        <div className='product-card' key={items.name}>
            <div className='product-image'>
                <img src={items.images} alt={items.item} />
            </div>
            <div className='product-content'>
                <div className='product-title'>
                    <h3>{items.item}</h3>
                </div>
                <div className="producy-price">
                    <p>₹{items.price}/{items.quantity}</p>
                </div>
            </div>
            <div className='product-btn'>
                {quantity >= 1 ? (
                    
                    <UpdateProduct items={items} setQuantity= {setQuantity} quantity={quantity} />
                    
                ) : (<div className="add" onClick={() => {
                    if (token !== '') { handelAddCart(items.item); } 
                    else { loginFirst() };
                }}>ADD</div>)
                }

            </div>
        </div>
    )
}

export default SingleCard;