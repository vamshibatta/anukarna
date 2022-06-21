import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const axios = require('axios');


const Cart = () => {

    const [totalData, setTotalData]: any = useState([]);
    const [noData, setNoData]: any = useState('');

    useEffect(() => {
        let token: string = localStorage.getItem('auth-token') ?? "";

        axios({
            method: 'post',
            url: 'http://localhost:4000/api/cart/fetch',
            headers: { 'auth-token': token }
        })
            .then((response: any) => {
                if(response.data === "noItems"){
                    setNoData('There are no Items in your Cart!!!');
                }
                else{
                    localStorage.setItem('totalData', JSON.stringify(response.data));
                    const totaldata: string = localStorage.getItem('totalData') ?? "";
                    setTotalData(JSON.parse(totaldata));
                }
            })
            .catch((error: any) => {
                console.log(error);
            });

    }, []);

    const handleDelete = (name:string) =>{

        let token: string = localStorage.getItem('auth-token') ?? "";
        const data = {name};

        axios({
            method: 'delete',
            url: 'http://localhost:4000/api/cart/remove',
            headers: { 
                'auth-token': token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
            .then((res:any) => {
                setTotalData([]);
                Swal.fire({
                    title: `Removed ${res.data}.`,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#e87a04'
                });
                window.location.reload();
            })
            .catch((error:any) =>{
                console.log(error);
            })
    };

    // window.location.reload();

    return (
        <div className="cart">
            <div className="cartCont">
                {totalData && totalData[0]?.map((obj: any, index: number) => {
                    return (
                        <div className="singleItem">
                            <h3>{obj.name}</h3>
                            <div>
                                <span>Quantity: {obj.quantity * obj.baseQuantity}</span>
                                <span>Price: {obj.quantity * obj.price} </span>
                            </div>
                            <div className="remove-btn" onClick={ ()=>{handleDelete(obj.name)} }>Remove</div>
                        </div>
                    );
                })}
                {noData && <div> {noData} </div>}
            </div>
        </div>
    );
};

export default Cart;