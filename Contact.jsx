import React from 'react'
import {Button,Col,Container,Form,Row,Image} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import watch from './assets/aboutwatch.jpg';
import Footer from './Footer';
import cont from './assets/cont.jpg';
function Contact() {
  
  
  return (
    <>
    <Image src={cont} fluid style={{height:'100vh',width:'235vh',filter:'blur(3px)'}}/>;
    {/* <h1 style={{position:'absolute',textAlign:'center',color:'white',top:'50%',fontSize:'80px',fontFamily:'times new roman'}}>Contact</h1> */}
    
    <h1 style={{textAlign:'center'}}>Contact Location</h1><br/><br/>
    <Container style={{border:'2px solid whitesmoke', boxShadow:'8px 8px 8px black'}}>
      <Row>
        <Col sm={12} md={3} lg={3}>
          <h4 style={{textAlign:'center'}}>Address 1</h4>
          <h2 style={{textAlign:'center'}}>Viswai Clocks</h2>
          <h6 style={{textAlign:'center'}}>NRKR Road,Sivakasi</h6>
          <div style={{textAlign:'center'}}>9629196431</div>
        </Col>
        <Col sm={12} md={3} lg={3}>
        <h4 style={{textAlign:'center'}}>Address 2</h4>
          <h2 style={{textAlign:'center'}}>Viswai Clocks</h2>
          <h6 style={{textAlign:'center'}}>KTPTx Road,Sivakasi</h6>
          <div style={{textAlign:'center'}}>7629196431</div>
        </Col>
        <Col sm={12} md={3} lg={3}>
        <h4 style={{textAlign:'center'}}>Address 3</h4>
          <h2 style={{textAlign:'center'}}>Viswai Clocks</h2>
          <h6 style={{textAlign:'center'}}>New Road,Sivakasi</h6>
          <div style={{textAlign:'center'}}>8629196431</div>
        </Col>
        <Col sm={12} md={3} lg={3}>
        <h4 style={{textAlign:'center'}}>Address 4</h4>
          <h2 style={{textAlign:'center'}}>Viswai Clocks</h2>
          <h6 style={{textAlign:'center'}}>Gandhi Road,Sivakasi</h6>
          <div style={{textAlign:'center'}}>9629446431</div>
        </Col>
      </Row>
    </Container><br/><br/>

    <h3 style={{textAlign:'center'}}>PLEASE COME AGAIN.....</h3><br/><br/>

    <Footer/>
    </>

  )
}

export default Contact