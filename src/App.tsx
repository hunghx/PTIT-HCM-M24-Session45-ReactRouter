import { Route } from "react-router-dom"
import CopyRight from "./components/CopyRight"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Router from "./router/Router"

function App() {
  return (
    <div>
  
      {/* Main Content */}
      <Router/>
      {/* End Main Content */}
      <Footer/>
      <CopyRight/>
    </div>
  ) 
}

export default App
