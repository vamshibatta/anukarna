import React, { useState } from "react";
import { CgSearch, CgClose } from 'react-icons/cg'
import { CarouselData } from '../../CarouselData'
import './Searchbar.css';

const Searchbar = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordSearched, setWordSearched] = useState([]);


    const handleFilter = (event:any) => {
        const searchWord:any = event.target.value;
        setWordSearched(searchWord);
        const newfilter:any = CarouselData.filter((value) => {
            return value.item.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newfilter);
        }
    }
    
    const clrInp = () => {
        setFilteredData([]);
        setWordSearched([]);
    }

    return (
        <div className="bar-container">

            <div className={ filteredData.length === 0 ? 'search-bar': (filteredData.length === 1 ? 'search-bar1' : (filteredData.length === 2 ? 'search-bar2' : (filteredData.length === 3 ? 'search-bar3' : 'search-bar4'))) }>

                {/* @ts-ignore */}
                <input className="search-input" type='text' value={wordSearched} placeholder='Search here...' onChange={handleFilter}></input>
                
                <div className='search-icon'>
                    { filteredData.length !==0 ? <CgClose onClick={clrInp} id="clr-btn"/> : <CgSearch /> }
                </div>

            </div>


            {filteredData.length !== 0 && (

                <div className={filteredData.length >4 ? "data-result height" : "data-result"}>
                    {filteredData.map((items:any, index) => {
                        return (
                            <div className="data-item">
                                <p>{items.item}</p>
                            </div>
                        );
                    })}
                </div>

            )}

        </div>
    );
}

export default Searchbar;