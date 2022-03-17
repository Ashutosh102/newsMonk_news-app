
import './App.css';
// f59178ab70df48bc83797911eebc20d9

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Loading } from './components/Loading';

export default class App extends Component {
  render() {
    return (
     <>
     <Navbar/>
     <News pageSize={8} country="in"/>
     
     </>
    )
  }
}

