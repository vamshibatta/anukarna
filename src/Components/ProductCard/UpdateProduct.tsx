import axios from "axios";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import Swal from 'sweetalert2';
import './ProductCard.css';

interface Props{
    items:any,
    setQuantity:any,
    quantity:number
}

const UpdateProduct = ( props: Props  ) => {

    // const [quantity, setQuantity] = useState(0);
    let token: string = localStorage.getItem('auth-token') ?? "";

    const handleItemUpdate = (name: string, itemQuantity:number) => {
        const data = { name, itemQuantity };
        axios({
            method: 'post',
            url: 'http://localhost:4000/api/cart/update',
            headers: {
                'auth-token': token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
            .then((res: any) => {
                props.setQuantity(itemQuantity);
            })
    }

    const handleDelete = (name: string) => {
        const data = { name };

        axios({
            method: 'delete',
            url: 'http://localhost:4000/api/cart/remove',
            headers: {
                'auth-token': token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
            .then((res: any) => {
                Swal.fire({
                    title: `Removed ${res.data}.`,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#e87a04'
                });
                props.setQuantity(0);
            })
            .catch((error: any) => {
                console.log(error);
            })
    };

    return (
        <div className='quantity-counter'>
            <AiOutlineMinusSquare className='quantity-counter-icon' onClick={() => {
                let q = props.quantity - 1;
                if (q === 0) { handleDelete(props.items.item); }
                else { handleItemUpdate(props.items.item, q); }
            }} />
            <p className='quantity-counter-indicator'>{props.quantity}</p>
            <AiOutlinePlusSquare className='quantity-counter-icon' onClick={() => {
                let q = props.quantity + 1;
                handleItemUpdate(props.items.item, q);
            }} />
        </div>
    )
}

export default UpdateProduct