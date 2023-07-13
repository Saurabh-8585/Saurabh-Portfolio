import '../styles/Error404.css';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="error-container">
        <i className="fa fa-exclamation-circle error-icon"></i>
        <h1 className="error-heading">404</h1>
        <p className="error-text">Oops! The page you're looking for could not be found.</p>
        <Link to="/" className="back-home-link">Back to Home</Link>
      </div>
  
    );
};

export default Error404;
