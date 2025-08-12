// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'; // Run: npm install react-icons

const Header = () => {
  const { pathname } = useLocation();
  // Get cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  // Calculate total number of items
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Don't show header on the landing page
  if (pathname === '/') {
    return null;
  }

  return (
    <header className="header">
      <h1>Paradise Nursery</h1>
      <nav>
        {pathname === '/cart' && <Link to="/products">Products</Link>}
        {pathname === '/products' && (
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            <span>{totalItems}</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;