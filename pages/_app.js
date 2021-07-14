
// global styles to clear default padding and margins
import '../styles/globals.css'

// components
import Footer from '../components/Footer/Footer'
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

// hooks
import { useState } from 'react';


function MyApp({ Component, pageProps }) {

  // mock loggoutOut authmiddleware hard coded log in var
  const loggedOut = true

  // we will psss the components and pages as props 
  const [isOpen, setIsOpen] = useState(false);
  // for the sidebar if the prop is a bool then the style will show
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      { loggedOut && <Navbar toggle={toggle} /> }
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
      <Footer/> 
    </>
  )
}

export default MyApp
