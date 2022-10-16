import React,{useEffect,useState} from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import gen from '../Assets/gen.jpeg'
import { useNavigate } from 'react-router-dom'

export default function Bar() {
  const [isLoggedIn,setIsloggedIn] = useState(false)
  const navigation = useNavigate();
  useEffect(()=>{
    let user = localStorage.getItem('corpusUserData')
    if(user!==null){
      setIsloggedIn(true)
    }
  },[])
  return (
    <div style={{backgroundColor:'#3e7bb3'}}>
      <Navbar expand="lg" className="container-fluid">
        &nbsp;
        &nbsp;
          <Navbar.Brand className="brand"> <img
              src={gen}
              alt="logo"
              height="60"
              width="160"
              style={{borderRadius:'5px'}}
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <br/>
          <Navbar.Collapse>
            
            <Nav className="ms-auto justify-content-center p-1 navbar">
              <strong>
                <Nav.Link href="/Search" className="text-white">Home</Nav.Link>
              </strong>
              <strong>
                <Nav.Link href="/AboutUs" className="text-white">About Us</Nav.Link>
              </strong>
              {/* <strong>
                <Nav.Link href="/Search" className="text-white">Search</Nav.Link>
              </strong> */}
              {/* <strong>
                <Nav.Link href="/Resource" className="text-white">Related Resources</Nav.Link>
              </strong> */}
              {/* <strong>
                <Nav.Link href="/Account" className="text-white">My Account</Nav.Link>
              </strong> */}
              <strong>
                <Nav.Link href="/Help" className="text-white">Help</Nav.Link>
              </strong>
              {isLoggedIn===false &&               <strong>
                <Nav.Link href="/Login" className="text-white">Login</Nav.Link>
              </strong>}
              <strong>
                <Nav.Link href="/Contact" className="text-white">Contact</Nav.Link>
              </strong>
              {isLoggedIn===true &&   <button class="btn btn-danger btn-sm text-white"
                    onClick={() => {
                      localStorage.removeItem('corpusUserData')
                      navigation('/')
                      // console.log('windowwww--->',window.location.pathname)
                      if(window.location.pathname==='/'){
                        window.location.reload()
                      }
                    }}
                  >
                    LOGOUT
                  </button>}

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
