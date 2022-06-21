import './ProductCard.css';
import { useState } from 'react';
import SingleCard from './SingleCard';

interface Item {
    item: string
    images: string
    price: string
    category: string
    quantity: string
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

    return (
        <div className="container">
            <div className="categories">
                <div className="op">Our Products</div>
                <div>
                    <span>Sort By: </span>
                    <select id="catSelector" value={sel} onChange={handleFilter}>
                        <option value="All"> All </option>
                        <option value="Sweets"> Sweets </option>
                        <option value="Savoury Bites"> Savoury Bites </option>
                        <option value="Pickles"> Pickles </option>
                    </select>
                </div>
            </div>

            <div className="main-container">
                {filteredData.map((items: any) => {

                    return (
                        <SingleCard items={items}/>
                    );
                })
                }
            </div>
        </div>
    )
}

export default ProductCard;