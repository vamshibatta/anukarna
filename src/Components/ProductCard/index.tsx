import { useEffect, useState } from 'react';
import { CarouselData } from '../CarouselData';
import './ProductCard.css';

interface Item{
    item:string
    images:string
    price:string
    category:string
    quantity:string
}

function ProductCard({ items }: { items: Array<Item> }) {

    const [sel, setSel] = useState('');

    const [filteredData, setFilteredData] = useState(items);

    const handleFilter = (e: any) => {
        const selected: string = e.target.value;
        setSel(selected);
        const newSelected: Array<Item> = items.filter((value) => {
            return value.category.toLowerCase() === selected.toLowerCase();
        })
        console.log(newSelected);
        if (selected === "All") {
            setFilteredData(items);
        }
        else {
            setFilteredData(newSelected);
        }
    }

    console.log(sel);
    return (
        <div className="container">
            <div className="categories">
                <div className="op">Our Products</div>
                <div>
                    <span>Sort By: </span>
                    <select id="catSelector" value={sel} onChange={handleFilter}>
                        
                        <option value="All" selected> All </option>
                        <option value="Sweets"> Sweets </option>
                        <option value="Savoury Bites"> Savoury Bites </option>
                        <option value="Pickles"> Pickles </option>

                    </select>
                </div>
            </div>

            <div className="main-container">
                {filteredData.map((items: any) => {

                    return (
                        <div className='product-card'>
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
                            <div className='product-btn'> <button> ADD TO CART </button> </div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    )
}

export default ProductCard;