
// Modules
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink, useQuery } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// where playground will be used
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // later in development this will combine the auth link
  link: httpLink,
  cache: new InMemoryCache(),
});

// redux
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../client/redux/store';


// global styles to clear default padding and margins
import '../client/styles/globals.css'

// components
import Footer from '../client/components/Footer/Footer';
import Navbar from "../client/components/Navbar/Navbar";
import Sidebar from "../client/components/Sidebar/Sidebar";

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
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        { loggedOut && <Navbar toggle={toggle} /> }
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Component {...pageProps} />
        <Footer/> 
      </ApolloProvider>
    </ReduxProvider>
  )
}

export default MyApp
