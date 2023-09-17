import '../styles/itemlist.css';
import React, {useState, useEffect} from 'react';
import openCostsDB from '../idb';
import Item from '../components/item';

export default function ItemList() {

    const [month,setMonth] = useState("2023-09");
    const [year,setYear] = useState("2023");
    const [items,setItems] = useState([]);
    const [previousItems, setPreviousItems] = useState([]);

    useEffect( () => {
        const lists = async () => {
            const storage = new openCostsDB();
            const l = await storage.getdb();
            setPreviousItems(l);
            setItems(l);
        }
        lists();
    }, []
    );

    const showAllItems = (event) =>{
        event.preventDefault();
        setItems((previousItems));
    };

    const handlingYear = (event) => {
        setYear(event.target.value);
    }

    const handlingMonth = (event) => {
        setMonth(event.target.value);
    }

    const monthSelectedItems = (event) =>{
        event.preventDefault();
        const filtered = previousItems.filter((item) => {
            return item.date.includes(month);
        });
        setItems(filtered);
    }

    const yearSelectedItems = (event) =>{
        event.preventDefault();
        const filtered = previousItems.filter((item) => {
            return item.date.includes(year);
        });
        setItems(filtered);
    }

return (
    <div className='all'>
        <br></br>
    <div className='search-block'>
    <form>
    <div className="search-month">
    <h3>Search by Month:</h3> &nbsp;&nbsp;&nbsp;&nbsp;
    <input
        type="month"
        id="monthpicker"
        min="1990-01"
        onChange={handlingMonth}
        value={month}
        required
    /> &nbsp;&nbsp;
    <button id="search-month" className="btn btn-secondary" onClick={monthSelectedItems}>Search</button> &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </form>
    <form onSubmit={yearSelectedItems}>
        <div className="search-year">
        <h3>Search by Year:</h3> &nbsp;&nbsp;&nbsp;&nbsp;
        <input
            type="number"
            id="yearpicker"
            min="1900"
            max="2023"
            onChange={handlingYear}
            value= {year}
            placeholder="2023"
            required
        /> &nbsp;&nbsp;
        <button type='submit' id="search-year" className="btn btn-secondary">Search</button>
        </div>
    </form> &nbsp;&nbsp;
            <div className="reset-div">
                <button type="reset" onClick={showAllItems}  className=" btn reset-btn">Reset</button>
            </div>
        </div>


        <div className="product-list">
            {items.length === 0 ? (
                <div className="no-items">
                    <h1 style={{ margin: "0 auto" }}>
                        There are no items to display...
                    </h1>
                </div>
            ) : (
                <div>
                    <div className='product-list'>
                        <h1>Total Price: {items.reduce((total, item) => total + parseInt(item.price),0)} ₪</h1>
                    </div>
                    <div className='product-list'>
                        {items.map((product, index) => (
                            <Item
                                key={index}
                                name={product.name}
                                date={product.date}
                                price={product.price}
                                category={product.category}
                                description={product.description}
                            />
                        ))}
                    </div>
                </div>
            )}

        </div>
    </div>
);
}

