import React,{useState} from 'react'
import {Button,Col,Container,Form,Row,Image} from 'react-bootstrap';

import axios from 'axios';
import lock from './assets/lock.png';
import watch from './assets/loginwatch.jpg'
import con from './assets/contact.jpg';
import adr from './assets/adr.png'
import './Login.css'
function MobileLogin() {
  const [userData,setUserData]=useState({
    name:'',
    email:'',
    password:'',
    mobile:''
  });
    const updateUseData=(e)=>{
      console.log("===e==",e.target)
      const {name,value}=e.target;
      setUserData({...userData,[name]:value})
      }
    const handleSubmit=()=>{
      console.log("====Submitted===",userData)
      alert("Submitted");
      let data={
        name:userData.name,
        password:userData.password,
        email:userData.email,
        mobile:userData.mobile

      }
      axios.post('http://localhost:1031/project/create',data)
      .then((res)=>{
        console.log("===Response===",res)
      })
      .catch((err)=>{

      })
    }
  return (
    <>
      <Container>
        <Row >
          <Col className='first' lg={6} md={6} sm={12}>
            <Container style={{display:'flex',justifyContent:'center',marginTop:'90px'}}>
            <Form style={{borderRight:'2px',borderColor:'white'}}>
            <Form.Group className="mb-3" controlId="formGroup">
                <Form.Label >Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" value={userData.name} onChange={updateUseData} style={{width:350}} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label >Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" value={userData.email} onChange={updateUseData} style={{width:350}} />
              </Form.Group>

             <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label >Password</Form.Label>
              <Form.Control type="password" placeholder="Create a password" name="password" value={userData.password} onChange={updateUseData} style={{width:350}} />
              <p className='mt-2' style={{fontSize:14,fontWeight:400}}>Must be atleast 8 characters</p>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formGroup">
                <Form.Label >Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter your mobile no." name="mobile" value={userData.mobile} onChange={updateUseData} style={{width:350}} />
              </Form.Group>

            
            <Button style={{width:250,height:40,marginLeft:30}} variant="secondary" onClick={handleSubmit}>Login</Button>{' '}
            </Form>
            </Container>
          </Col>
          <Col lg={6} md={6} sm={12} >
            
            <h1 style={{textAlign:'center',fontWeight:'800',marginTop:'30px'}}>Best Watches</h1>
            <div style={{textAlign:'center',fontWeight:'800'}}>25% Offer</div><br/><br/>
            <Container style={{display:'flex',justifyContent:'space-around'}}>
            <Image src={adr}></Image>
            </Container>
          </Col>
          </Row>
          
          </Container>


          

         
            
    </>
    
  )
}

export default MobileLogin  