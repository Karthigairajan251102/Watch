import React from 'react'
import { Container,Image,Row,Col } from 'react-bootstrap'
import rm from './assets/rm.png'
import star from './assets/rating.png'
import './Rm.css'
function Roamer() {
  return (
    <>
    <Container  className='rm'>
      <Row>
        <Col lg={6} md={6} sm={12} style={{display:'flex',justifyContent:'center'}}>
        <Image src={rm} style={{height:'300px'}}></Image>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <h3>ROAMER RM</h3>
          <h6>$550</h6>
          <p>Combine quality, cutting edge fashion and value. The look is bold, <br/>
            very beautiful, comfortable and very stylish. This is also a great <br/>
            chioce for family or friends.</p>
            <h5 style={{color:'yellowgreen'}}>Available</h5>
            <Image src={star} style={{width:'150px'}}></Image>
        </Col>
      </Row>
    </Container>
    </>

)
}

export default Roamer