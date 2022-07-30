import './NoQuotesFound.scss';
import { Link } from 'react-router-dom';

const NoQuotesFound = () => {
  return (
    <div className="noquotes">
      <p>No quotes found!</p>
      <Link className='btn' to="add-quote">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
