import React from 'react';
import MainHeader from '../components/main-header/main-header.component';
import SideMenu from '../components/side-menu/side-menu.component';


const MasterLayout = ({children}) => {
    return(
        <>
            <MainHeader/>
            <SideMenu/>
            <div className="content-wrapper">
                {children}
            </div>
        </>
    )
}

export default MasterLayout;