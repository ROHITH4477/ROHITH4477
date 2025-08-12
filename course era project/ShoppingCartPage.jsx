// src/pages/ShoppingCartPage.jsx
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-summary">
        <p>Total Plants: {totalItems}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
        <div className="cart-actions">
           <Link to="/products" className="button">Continue Shopping</Link>
           <button onClick={() => alert('Checkout is coming soon!')} className="button">Checkout</button>
        </div>
      </div>

      <div className="cart-items-list">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
              <div className="item-quantity">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="delete-button">Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;