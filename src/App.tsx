import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Router from "./router/Router"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";


const isActive = ({isActive}: {isActive:boolean})=>{
    // destructoring
    return {
      color : isActive?"orange":"black",
      backgroundColor : isActive?"blue":"white"
    }
}

function App() {
  return (
    <>
    {/* sử dụng 2 thẻ : Link và NavLink */}
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link> */}
            {/* <Link className="nav-link" to={"/home"} >Home</Link>
            <Link className="nav-link" to={"/about"} >About</Link>
            <Link className="nav-link" to={"/products"} >Products</Link>
            <Link className="nav-link" to={"/profile"} >Profile</Link> */}
            <NavLink className="nav-link" style={isActive} to={"/"} >Home</NavLink>
            <NavLink className="nav-link" style={isActive} to={"/about"} >About</NavLink>
            <NavLink className="nav-link" style={isActive} to={"/products"} >Products</NavLink>
            <NavLink className="nav-link" style={isActive} to={"/profile"} >Profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/*  React Router -  Bộ điều hướng / Bộ định tuyến */}
      <Router/>

    </>
  ) 
}

export default App
