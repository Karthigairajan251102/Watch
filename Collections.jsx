import React, { useEffect,useState } from 'react'
import { Container,Row,Col,Image,Button } from 'react-bootstrap'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import rolex4 from './assets/gold.jpg'
import rolex2 from './assets/rolex2.jpg'
import rolex3 from './assets/rolex3.jpg'
import omg1 from './assets/omgblk.jpg'
import omg2 from './assets/omgwht.jpg'
import omg3 from './assets/omglht.jpg'
import tim1 from './assets/tim.jpg'
import tim2 from './assets/tim1.jpg'
import tim3 from './assets/tim2.jpg'
import phil1 from './assets/phil.jpg'
import phil2 from './assets/phil1.jpg'
import phil3 from './assets/phil2.jpg'
import tudor1 from './assets/tudor1.jpg'
import tudor2 from './assets/tudor2.jpg'
import panerai from './assets/panerai.jpg'
import Footer from './Footer';
import './Col.css'
function Collections() {
  const rolex={
    ro1:'Rolex Black',
    ro2:'Rolex Silver',
    ro3:'Rolex Gold'
  }
  const[data,setdata]=useState([]);

  const getproducts=()=>{

      axios.get('http://localhost:1033/product/all')
      .then((res)=>{
          console.log(res)
          setdata(res.data)
      })
      .catch((err)=>{

      })
      
  }

  useEffect(()=>{
      getproducts();
  },[])
  return (
    <>
    <h1 style={{textAlign:'center',color:'Black',marginTop:'50px'}}>Collections</h1><br/><br/>
    
 
   
   <Container >
            <Row style={{gap:'20px',alignContent:'center'}}>
                {data.map((e)=>(
                  
                   <Col key={e.prodId}  > 
                     <Container style={{display:'flex',justifyContent:'space-evenly'}}>
                    <Card style={{ width: '18rem',backgroundColor:'black'}} key={e.prodId} >
                        <Card.Body>
                                
                        <Card.Img variant="top" src={omg1} /><br/><br/>

                                {/* <Card.Title style={{color:'white',textAlign:'center'}}>{e.id}</Card.Title> */}
                            <Card.Text>
                            <Card.Subtitle className="mb-2" style={{color:'white',textAlign:'center'}}>{e.name}</Card.Subtitle>                           
                            <Card.Subtitle className="mb-2" style={{color:'white',textAlign:'center'}}>{e.rate}</Card.Subtitle>
                            </Card.Text>
                            {/* < Card.Link href="#"><Button style={{backgroundColor:'#fe9e0d'}}>Add to cart</Button></Card.Link> */}
                            <Card.Link href="#"></Card.Link>
                        </Card.Body>
                        {/* <Link to='users'>Click</Link> */}
                        <Container style={{display:'flex',justifyContent:'center'}}>
                        <Button variant="warning" className='view'>View</Button>{' '}
                        </Container><br/>
                    </Card>
                    </Container>

                    </Col>
                   ))
                }
            </Row>
        </Container><br/><br/>
        <Footer/>
    </>
  )
}

export default Collections