
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'


const About = () => {
  return (
    <>
     <div className="header_section">
                <div className="container">
                    <Navbar />
                </div>
            </div>
      {/* about section start */}
      <AboutSection />
      {/* about section end */}
    </>
  )
}

export default About
