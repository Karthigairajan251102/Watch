import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Button, Container,Image } from 'react-bootstrap';
import MobileHome from './MobileHome';
import About from './About';
import Collections from './Collections';
import Contact from './Contact';
import seiko from './assets/seiko.png'
import { Link } from 'react-router-dom';
import './Navss.css'
function Navss() {
  return (

    <>
       <Navbar expand="lg" className="bg-body-tertiary" style={{margin:0,padding:0}} sticky='top'>
      <Container fluid style={{backgroundColor:'yellow',margin:0,padding:0}}>
        <Image src={seiko} style={{height:'50px',width:'50px',borderRadius:'50%'}}></Image>
        <Navbar.Brand href="#" className='head'>Viswai Clocks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1" className='bar' ><Link to="/" style={{color:'Black',textDecoration:'none'}}>Home</Link></Nav.Link>
            <Nav.Link href="#action2" className='bar' ><Link to="/Collections" style={{color:'Black',textDecoration:'none'}}>Collections</Link></Nav.Link>
            <Nav.Link href="#action3" className='bar'  > <Link to="/About" style={{color:'Black',textDecoration:'none'}}>About</Link></Nav.Link>
            <Nav.Link href="#action4" className='bar'  ><Link to="/Contact" style={{color:'Black',textDecoration:'none'}}>Contact</Link></Nav.Link>
          </Nav>
          <Button className='btnnav'><Nav.Link href="#action5" className='navss'  ><Link to="/MobileLogin" style={{color:'Black',textDecoration:'none'}}>Login</Link></Nav.Link></Button>

        </Navbar.Collapse>

      </Container>
    </Navbar>
    
    </>
    
  )
}

export default Navss