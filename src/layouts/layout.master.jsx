import React from 'react';
import MainHeader from '../components/main-header/main-header.component';


const MasterLayout = ({children}) => {
    return(
        <>
            <MainHeader/>
            {children}
        </>
    )
}

export default MasterLayout;