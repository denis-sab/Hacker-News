import { useState } from 'react';
import NavBar from "./components/NavBar";
import ResultList from "./components/ResultList";
import Footer from './components/Footer';

import './App.css'

export default function App(){

  const [searchQuery, setSearchQuery]=useState("");

  return(
    <div>
      <NavBar setSearchQuery={setSearchQuery}/>
      <ResultList searchQuery={searchQuery} />
      <Footer />
    </div>
  )
}