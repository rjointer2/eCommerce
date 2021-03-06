
// Modules
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink, useQuery } from '@apollo/client';

// where playground will be used
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // later in development this will combine the auth link
  link: httpLink,
  cache: new InMemoryCache(),
});

// global styles to clear default padding and margins
import '../client/styles/globals.css'

// components
import Footer from '../client/components/Footer/Footer';
import Navbar from "../client/components/Navbar/Navbar";
import Sidebar from "../client/components/Sidebar/Sidebar";

// hooks
import { useState } from 'react';

// state management
import useGlobalState from '../client/store/useGlobalState';
import Context from '../client/store/context';



function MyApp({ Component, pageProps }) {

  const store = useGlobalState();

  // mock loggoutOut authmiddleware hard coded log in var
  const loggedOut = true

  // we will psss the components and pages as props 
  const [isOpen, setIsOpen] = useState(false);
  // for the sidebar if the prop is a bool then the style will show
  const toggle = () => setIsOpen(!isOpen);

  return (
    <ApolloProvider client={client}>
      <Context.Provider value={store}>
          <main>
            { loggedOut && <Navbar toggle={toggle} /> }
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Component {...pageProps} />
            <Footer/> 
          </main>
      </Context.Provider>
    </ApolloProvider>
  )
};

export default MyApp;


