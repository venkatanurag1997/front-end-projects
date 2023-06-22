import React from 'react';
import { Blog, Features, Footer, Header, Futures, WhatVR } from './containers';
import { Brand, CTA, Navbar, } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='bg__gradient'>
        <Navbar />
        <Header />
      </div>
      < Brand />
      < WhatVR />
      < Features />
      < Futures />
      < CTA />
      < Blog />
      < Footer />
        
    </div>
  )
}

export default App