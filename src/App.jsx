<<<<<<< HEAD
import { useState } from 'react';
import NavBar from "./components/NavBar";
import ResultList from "./components/ResultList";
import Footer from './components/Footer';

=======
import { Component, useState } from 'react'
>>>>>>> dec581ce60d31c8c9848c86b9239b5dbbbc4e2b4
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

<<<<<<< HEAD
export default function App(){

  const [searchQuery, setSearchQuery]=useState("");

  return(
    <div>
      <NavBar setSearchQuery={setSearchQuery}/>
      <ResultList searchQuery={searchQuery} />
      <Footer />
    </div>
=======
function App() {
 
  

  return (
    <>
    <NavBar />
    <Footer />
    </>
>>>>>>> dec581ce60d31c8c9848c86b9239b5dbbbc4e2b4
  )
}