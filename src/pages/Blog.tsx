import React from 'react'
import Header from '../components/Header'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
import Navbar from '../components/Navbar'


const Blog = () => {
    return (
        <>
         <div className="header_section">
                <div className="container">
                    <Navbar />
                </div>
            </div>

            {/*  blog section start */}
            <BlogSection />
            {/*  blog section end */}


        </>
    )
}

export default Blog
