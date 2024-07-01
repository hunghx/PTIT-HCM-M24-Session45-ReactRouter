import React from 'react'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import BlogSection from '../components/BlogSection'
import RepairSection from '../components/RepairSection'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
import ContactSection from '../components/ContactSection'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const HomePage = () => {
    return (
        <>
            <div className="header_section">
                <div className="container">
                    <Navbar />
                </div>
                {/* banner section start */}
                <Banner />
                {/* banner section end */}
            </div>
            {/* about section start */}
            <AboutSection />
            {/* about section end */}
            {/*  blog section start */}
            <BlogSection />
            {/*  blog section end */}
            {/*  repair section start */}
            <RepairSection />
            {/*  repair section end */}
            {/* contact section start */}
            <ContactSection />
            {/* contact section end */}
            s

        </>
    )
}

export default HomePage
