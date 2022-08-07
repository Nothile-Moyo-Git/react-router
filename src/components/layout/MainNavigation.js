import './MainNavigation.scss';
import { NavLink } from 'react-router-dom';

const MainNavigation = (props) => {
    return (
        <header className="header">
            <NavLink className="logo" exact={true} to="/react-router/">Router App</NavLink>
            <div className="nav">
                <ul>
                    <li>
                        <NavLink activeClassName="active" exact={true} to="/react-router/quotes">All Quotes</NavLink>
                    </li>
                    <li>
                    <NavLink activeClassName="active" exact={true} to="/react-router/add-quote">Add Quote</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default MainNavigation;