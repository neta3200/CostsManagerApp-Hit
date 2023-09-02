import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App.js'
import ItemList from "../components/itemlist";

const Dash = () => {
    return(
        <div>
            <main className='container'>
                <ItemList />
            </main>
        </div>
    );
};

export default Dash