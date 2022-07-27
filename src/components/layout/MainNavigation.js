import './MainNavigation.scss';
import { NavLink } from 'react-router-dom';

const MainNavigation = (props) => {
    return (
        <header className="header">
            <p className="logo">Router App</p>
            <div className="nav">
                <ul>
                    <li>
                        <NavLink activeClassName="active" exact={true} to="/quotes">All Quotes</NavLink>
                    </li>
                    <li>
                    <NavLink activeClassName="active" exact={true} to="/add-quote">Add Quote</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default MainNavigation;