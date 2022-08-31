import './NoQuotesFound.scss';
import { Link } from 'react-router-dom';

const NoQuotesFound = () => {
  return (
    <div className="no-quotes">
      <p>No quote(s) found!</p>
      <Link className='btn' to="/new-quote">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
