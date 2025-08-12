// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: "url('/images/background.jpg')"}}>
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for the healthiest and most beautiful houseplants. Bring nature into your home today!</p>
        <Link to="/products" className="button-get-started">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;