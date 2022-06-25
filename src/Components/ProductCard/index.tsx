import './ProductCard.css';
import { useState } from 'react';
import SingleCard from './SingleCard';
import { Col, Row } from 'antd';

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
                <Row className="categories">
                    <Col style={{position: 'relative'}}
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={12}
                        xxl={12}
                    >
                        <div className='op'>Our Products</div>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={12}
                        xxl={12}
                    >
                        <div style={{textAlign:window.innerWidth>767?"right":"left",marginTop:window.innerWidth>767?'0px':'25px'}}>
                            <span>Sort By: </span>
                            <select id="catSelector" value={sel} onChange={handleFilter}>
                                <option value="All"> All </option>
                                <option value="Sweets"> Sweets </option>
                                <option value="Savoury Bites"> Savoury Bites </option>
                                <option value="Pickles"> Pickles </option>
                            </select>
                        </div>
                    </Col>
                </Row>
                

            <div className="main-container">
                <Row>
                {filteredData.map((items: any) => {
                    return (
                        <Col
                            xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={8}
                            xxl={6}
                        >
                            <SingleCard items={items}/>
                        </Col>
                    );
                })
                }
                </Row>
            </div>
        </div>
    )
}

export default ProductCard;