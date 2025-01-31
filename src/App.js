import React from 'react';
import { Brand, CTA, Navbar } from './component';
import { Blog, Features, Footer, Header, Possibility, WhatisGPT3 } from './container';
import './App.css';
const App= () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header/>
      </div>
      <Brand />
      <WhatisGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;