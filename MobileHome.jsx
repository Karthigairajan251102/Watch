import React from 'react'
import {Button,Col,Container,Form,Row} from 'react-bootstrap';
import Footer from './Footer';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import watch from './assets/watch.jpg';
import rm from './assets/rm.png';
import seiko from './assets/seiko.png';
import adrs from './assets/adr.png';

import rating from './assets/rating.png'
import military from './assets/military.jpg'
import './Home.css'
function MobileHome() {
  const[quantity,setQuantity]=useState(1);
  const[totalrate,setTotalRate]=useState(550);
  const[count,setCount]=useState(1);
  const[num,setNum]=useState(1)
  const topBrands = {
    name:"ADRIATICA ADR",
    rate:"$550",
    nameSei:"SEIKO SNZ",
    rmName:"ROAMER RM",
  }
  // const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(550);

  // Function to handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity =quantity+1;
    setQuantity(newQuantity);
    console.log("===Quantity===",newQuantity);

    // Update amount based on the new quantity

    setAmount(newQuantity * 550); // Just an example calculation
    console.log("===Amount===",amount);


  };
  const [rate,setRate]=useState(550)
  const handleQuantity = (e) => {
    const newCount =count+1;
    setCount(newCount);
    console.log("===Count 2nd card===",newCount);

    // Update amount based on the new quantity

    setRate(newCount * 550); // Just an example calculation
    console.log("===2nd card===",rate);


  };
  const[kasu,setKasu]=useState(550)
  const handleNum = (e) => {
    const newNum =num+1;
    setNum(newNum);
    console.log("===Count 1st card===",newNum);

    // Update amount based on the new quantity

    setKasu(newNum * 550); // Just an example calculation
    console.log("===1st card===",kasu);


  };

  
  return (
    <>
  
  
    {/* IMAGE START */}
    
    <Image src={watch} fluid style={{height:'100vh',width:'235vh'}}/>;
    <h1 style={{position:'absolute',textAlign:'left',color:'white',top:'50%',left:'64%'}}>CUSTOM <br/>WATCHES  <br/>FOR ANY <br/> OCCASION</h1><br/><br/>
    <Button variant="warning" style={{position:'absolute',textAlign:'left',color:'black',top:'79%',left:'68%'}}>Mens</Button>{' '}
    {/* <Button variant="warning" style={{position:'absolute',textAlign:'left',color:'black',top:'75%',left:'80%'}}>Womens</Button>{' '} */}

    {/* IMAGE END */}

    {/* CARDS START */}
    <h1 style={{textAlign:'center',color:'white'}}>Top Brands</h1>
    <CardGroup style={{padding:0,margin:0}}>
      <Card style={{ width: '18rem',backgroundColor:'black' ,margin:"50px",borderRadius:'40px' }} >
        <Card.Img variant="top" src={adrs} style={{height:'40vh'}}/>
        <Card.Body>
          <Card.Title style={{textAlign:'center',color:'white'}}>{topBrands.name}</Card.Title>
          <Card.Text style={{textAlign:'center',color:'white'}}>
            {topBrands.rate}
          </Card.Text>
          <h6 style={{textAlign:'center',color:'white'}}>Quantity:{num}</h6>
            <h6 style={{textAlign:'center' ,color:'white'}}>Total:{kasu}</h6>
          <Container style={{display:'flex',justifyContent:'space-around'}}>
          <Button  onClick={handleNum} style={{backgroundColor:'yellow',color:'black',border:'none',fontWeight:700}}>+</Button>{' '}
          <Link className='view' to="/Adr">View</Link>
          </Container>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem',backgroundColor:'black' ,margin:"50px",borderRadius:'40px' }} >
        <Card.Img variant="top" src={seiko} style={{height:'40vh'}}/>
        <Card.Body>
          <Card.Title style={{textAlign:'center',color:'white'}}>{topBrands.nameSei}</Card.Title>
          <Card.Text style={{textAlign:'center',color:'white'}}>
            {topBrands.rate}
          </Card.Text>
          <h6 style={{textAlign:'center',color:'white'}}>Quantity:{count}</h6>
            <h6 style={{textAlign:'center',color:'white'}}>Total:{rate}</h6>
          <Container style={{display:'flex',justifyContent:'space-around'}}>
          <Button  onClick={handleQuantity} style={{backgroundColor:'yellow',color:'black',border:'none',fontWeight:700}}>+</Button>{' '}
          <Link className='view' to="/Seiko">View</Link>
          </Container>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem',backgroundColor:'black' ,margin:"50px",borderRadius:'40px' }} >
        <Card.Img variant="top" src={rm} style={{height:'40vh'}}/>
        <Card.Body>
          <Card.Title style={{textAlign:'center',color:'white'}}>{topBrands.rmName}</Card.Title>
          <Card.Text style={{textAlign:'center',color:'white'}}>
            {topBrands.rate}
          </Card.Text>
          <Card.Text>
            <h6 style={{textAlign:'center',color:'white'}}>Quantity:{quantity}</h6>
            <h6 style={{textAlign:'center',color:'white'}}>Total:{amount}</h6>
            
          </Card.Text>
          <Container style={{display:'flex',justifyContent:'space-around'}}>
          <Button  onClick={handleQuantityChange} style={{backgroundColor:'yellow',color:'black',border:'none',fontWeight:700}}>+</Button>{' '}
          {/* <Button variant="light" onClick={handileDecrement}>-</Button>{' '} */}
          <Link className='view' to="/Roamer">View</Link>
          </Container>
        </Card.Body>
      </Card>
    </CardGroup>
    {/*CARDS END  */}

    {/* SPECIAL EDITON */}
    <h4 style={{textAlign:'center'}}>A Companian for a</h4>
    <h1 style={{textAlign:'center'}}>Special Edition</h1><br/><br/>
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12} style={{display:'flex',justifyContent:'center'}}>
        <Image src={military} style={{height:'300px'}}></Image>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <h3>LIGE Steel Wrist Watch</h3>
          <h6>$20</h6>
          <p>Combine quality, cutting edge fashion and value. The look is bold, <br/>
            very beautiful, comfortable and very stylish. This is also a great <br/>
            chioce for family or friends.</p>
            <Image src={rating} style={{width:'120px'}}></Image>
        </Col>
      </Row>
    </Container><br/><br/>

    
    <Footer/>
    
    
    </>
    

    
  )
}

export default MobileHome