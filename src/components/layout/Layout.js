import './Layout.scss';

const Layout = (props) => {

    return(
        <>
            <main className="main">
                {props.children}
            </main>
        </>
    );
}

export default Layout;