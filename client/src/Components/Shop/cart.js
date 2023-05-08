import React from 'react'
import { useState } from 'react';

const Cart = ({ cart }) => {

    const [cartItems, setCartItems] = useState(cart);

    const cartDelete = (bookId) => {
        setCartItems(cartItems.filter(book => book.id !== bookId));
    }

  return (
    <div className='container' id='cart-container'>
        <h2>Cart</h2>
        {cartItems.map(book => (
            <section className='d-flex justify-content-between'>
                <div key={book.id} className='cart-item'>
                <h4>{book.title}</h4>
                <p>{book.description}</p>
                </div>
                <button onClick={() => cartDelete(book.id)} className="btn btn-danger">delete</button>
            </section>
        ))}

    </div>
  )
}

export default Cart
