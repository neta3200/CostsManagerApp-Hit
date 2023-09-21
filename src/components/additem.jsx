//Student1: Netanel Iluz ID: 205856354
//Student2: Daniel Dabush ID: 316013671


import React,{useState} from 'react';
import openCostsDB from "../idb";
import '../styles/additem.css';

const AddItem = () => {
    const [item, setItem] = useState( {
       name: '',
       category: '',
       description: '',
       date: '',
       price: '',
    });
    const [popup, setPopup] = useState(false);


    const handlingEvent = (event) => {
      setItem({...item, [event.target.name]: event.target.value});
    };

    const handlingSubmit = async (event) => {
        event.preventDefault();
        const storage = new openCostsDB("CostsManagerDB");
        await storage.addCost(item);
        setPopup(true);
        setItem({
            name: '',
            price: '',
            date: '',
            category: '',
            description:  '',
        });
    };

    return (
        <div className="page-container">
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                {/*the display form the user need to insert the product details*/}
                <form className="form-add p-5 border border-primary rounded" onSubmit={handlingSubmit}>
                    <h2 className="text-center mb-4">Add Item</h2>
                    <label htmlFor="name">Full Name:</label>
                    <div className="form-group" >
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={item.name}
                            onChange={handlingEvent}
                            className="form-control"
                            required
                        ></input>
                    </div>
                    <label htmlFor="price">Price:</label>
                    <div className="form-group">
                        <input
                            type='number'
                            min="1"
                            id="price"
                            name="price"
                            step='0.1'
                            value={item.price}
                            onChange={handlingEvent}
                            className="form-control"
                            required
                        />
                    </div>
                    <label htmlFor="date">Date:</label>
                    <div className="form-group">
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={item.date}
                            onChange={handlingEvent}
                            className="form-control"
                            required
                        />
                    </div>
                    <label htmlFor="category">Category:</label>
                    <div className="form-group">
                        <select
                            id="category"
                            name="category"
                            value={item.category}
                            onChange={handlingEvent}
                            className="form-control"
                            required
                        >
                            <option value="" disabled selected>Select a category</option>
                            <option value="sport">sport</option>
                            <option value="food">food</option>
                            <option value="education">education</option>
                            <option value="furniture">furniture</option>
                            <option value="electronics">electronics</option>
                            <option value="other">other</option>
                        </select>
                    </div>

                    <label htmlFor="description">Description:</label>
                    <div className="form-group">
                        <textarea
                            id="description"
                            name="description"
                            value={item.description}
                            onChange={handlingEvent}
                            className="form-control"
                            required
                        />
                    </div>
                    <button type="submit" className="button btn btn-primary styles.button">
                        Add
                    </button>


                </form>

            </div>
            {/*this is responsible to the popup message*/ }
            {popup && (
                <div className="popup-container">
                    <div className="popup">
                        <h2>Item Added!</h2>
                        <button onClick={() => setPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddItem;