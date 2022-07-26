import './MainNavigation.scss';
import { NavLink } from 'react-router-dom';

const MainNavigation = (props) => {
    return (
        <header className="header">
            <h2>Router App</h2>
            <div>
                <NavLink activeClassName="active" exact={true} to="/quotes">All Quotes</NavLink>
                <NavLink activeClassName="active" exact={true} to="/add-quote">Add Quote</NavLink>
            </div>
        </header>
    );
}

export default MainNavigation;