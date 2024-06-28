import './navbar.css';
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
const Menu = () =>{
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#what_is_GPT3?">What is GPT3?</a></p>
    <p><a href="#open AI">Open AI</a></p>
    <p><a href="#case_studies">Case Studies</a></p>
    <p><a href="#library">Library</a></p>
  </>
}
const Navbar = () => {
  const {toggleMenu,setToggleMenu}=useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gtp3__navbar-links_container">
        <p><a href="#home">Home</a></p>
    <p><a href="#what_is_GPT3?">What is GPT3?</a></p>
    <p><a href="#open AI">Open AI</a></p>
    <p><a href="#case_studies">Case Studies</a></p>
    <p><a href="#library">Library</a></p>
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-signup">
        <div className="gtp3__navbar-links_container">
          <p><a href="#">Sign in</a></p>
          <button className='signup'><a href="#">Sign up</a></button>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu?<RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}></RiCloseLine>:<RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}></RiMenu3Line>}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
    <p><a href="#what_is_GPT3?">What is GPT3?</a></p>
    <p><a href="#open AI">Open AI</a></p>
    <p><a href="#case_studies">Case Studies</a></p>
    <p><a href="#library">Library</a></p>
              {/* <Menu /> */}
            </div>
          </div>
        
        )}
      </div>
    </div>
  )
}

export default Navbar;