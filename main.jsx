import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App.jsx'
// import './index.css'
// import MobileLogin from './MobileLogin.jsx'
// import Navss from './Navss';
import { BrowserRouter } from 'react-router-dom';
// import MobileHome from './MobileHome';
import Homepage from './Homepage';
// import GetData from './GetData';
// import Footer from './Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <MobileHome/> */}
  //   {/* <MobileLogin/> */}
  // </React.StrictMode>,
  <BrowserRouter>
      <Homepage></Homepage>
      {/* <GetData></GetData> */}
      {/* <Footer/> */}
  </BrowserRouter>
)
