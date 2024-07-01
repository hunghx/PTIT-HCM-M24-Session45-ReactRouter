import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="header_section">
            <div className="container">
                <Navbar/>
            </div>
            {/* banner section start */}
            <Banner />
            {/* banner section end */}
        </div>
    )
}

export default Header
