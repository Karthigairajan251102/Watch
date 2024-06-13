import React from 'react'
import {Button,Col,Container,Form,Row,Image} from 'react-bootstrap';
import axios from 'axios';
import watch from './assets/aboutwatch.jpg'
import abt from './assets/abt.jpg'
function About() {
  return (
    <>
    
    <h1 style={{textAlign:'center'}}>Our Store</h1><br/><br/>
    <Container>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Image src={abt} fluid style={{height:'50vh',width:'235vh',padding:0,margin:0}}/>
        </Col>

        <Col sm={12} md={6} lg={6}>
          <Container style={{padding:'50px'}}>
        <h1 style={{textAlign:'center'}}>About</h1>
        <p style={{textAlign:'center'}}>Memphis clinched a spot in the play-in tournament with the victory, <br/>
           but the fight for seeding continues. The race for the No. 8 spot in  <br/>
           the West -- and the safety net of having to win just one of two games <br/> 
           to make the playoffs -- could come down to the regular seasons final  <br/>
           day, when Memphis and Golden State meet. The good thing for the   <br/>
           is they dont have to leave home until that matchup as they have games  <br/>
           against Dallas and two against Sacramento before the finale</p>
           </Container>
        </Col>
      </Row>
    </Container><br/><br/><br/><br/><br/>


    {/* VISION START */}
    <Container style={{border:'2px solid whitesmoke',boxShadow:'8px 8px rgb(225, 214, 214)'}}>
      <Row>
        <Col sm={12} md={6} lg={4}>
        <h3 style={{textAlign:'center'}}>Our Misson</h3>
        <p style={{textAlign:'center'}}>Mauris congue quis elitat imperdputte teraesent lobortis mimptconvallis ortis porttiam augue sapieroin consectetur volutpat pretium ligula acposuere.</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <h3 style={{textAlign:'center'}}>Our Vision</h3>
        <p style={{textAlign:'center'}}>Fce euismodrcieget diaminia can utliauctor mollis egetquisislrpis portaus mattisliquam tempor nislipsa varius nulla ultriciesit anulla.</p>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <h3 style={{textAlign:'center'}}>Our Value</h3>
        <p style={{textAlign:'center'}}>Vestlum pharetramnon ornaante ornaretiumse ullamcoiamquis egtecenas sitamt nislut tellus ese haretra seron vesu liberulla facenean.</p>
        </Col>
      </Row>
    </Container><br/><br/>
    {/* VISION END */}

    {/* WORKERS START */}

      {/* <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
          <div style={{backgroundColor:'black',borderRadius:'50%'}}>
          <h6 style={{textAlign:'center'}}>100+</h6>
          <h6 style={{textAlign:'center'}}>Workers</h6>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div style={{backgroundColor:'black',borderRadius:'50%'}}>
          <h6 style={{textAlign:'center'}}>1000+</h6>
          <h6 style={{textAlign:'center'}}>Products</h6>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div style={{backgroundColor:'black',borderRadius:'50%'}}>
          <h6 style={{textAlign:'center'}}>4+</h6>
          <h6 style={{textAlign:'center'}}>Branches</h6>
          </div>
          </Col>
        </Row>
      </Container> */}

    {/* WORKERS END */}
    </>
  )
}

export default About