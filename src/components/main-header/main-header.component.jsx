import React from 'react';
import {Link} from 'react-router-dom';

const MainHeader = () => {
    return(
        <header className="main-header">
            <Link className="logo" to={process.env.PUBLIC_URL + '/account'}>
                KLOGIC
            </Link>
            <nav className="navbar navbar-static-top" role="navigation">
                <a href="#" data-toggle="push-menu" className="sidebar-toggle" role="button">
                    <span className="sr-only"><i className="fas fa-bars"></i></span>
                </a>
            </nav>
        </header>
    )
}

export default MainHeader;