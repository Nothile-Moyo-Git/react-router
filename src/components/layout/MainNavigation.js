import './MainNavigation.scss';
import { NavLink } from 'react-router-dom';

const MainNavigation = (props) => {

    const showFormHandler = () => {
        props.showForm(false);
    };

    return (
        <header className="header">
            <NavLink to="/quotes" activeClassName="active" className="logo">Router App</NavLink>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/quotes" activeClassName="active" onClick={showFormHandler}>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-quote" activeClassName="active">New Quote</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;