
// global styles to clear default padding and margins
import '../styles/globals.css'

// components
import Footer from '../components/Footer/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer/> 
    </>
  )
}

export default MyApp
