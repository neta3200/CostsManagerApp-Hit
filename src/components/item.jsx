import React from 'react';
import '../styles/item.css'

class Item extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            name: properties.name,
            date: properties.date,
            price: properties.price,
            desc: properties.desc,
            category: properties.category,
        };
    }

    render() {
        return (
            <div className="item-display">
                <div className="item-display-header">
                    <h2><strong>{this.props.name}</strong></h2>
                </div>
                <hr className="divider" /> {/* Horizontal line */}
                <div className="item-display-body">
                    <p><strong>Date:</strong> {this.props.date}</p>

                    <p><strong>Category:</strong> {this.props.category}</p>
                    <p><strong>Description:</strong> {this.props.description}</p>
                </div>
                <hr className="divider" /> {/* Horizontal line */}
                <div className="price-display-body">
                    <p><strong>Price:</strong> {this.props.price} ₪</p>
                </div>
            </div>
        );
    }

}
export default Item;

