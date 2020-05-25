import React, { Fragment } from 'react';

import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';


// import '../App.css';

function App() {
  return (
    <Fragment>
      <Home />
      <main>
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
