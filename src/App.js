import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
export class App extends Component {
  render() {
    return (
      <div>
    <Navbar />
  <News key="Business" pageSize={6} country="in" category="Business"/>
      </div>
    )
  }
}

export default App
