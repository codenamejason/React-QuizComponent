import React, { Component } from 'react'
import './App.css'
import Quiz from './Quiz.js';

class App extends Component {
  render() {
    return (
      <div>
        <Quiz />
        <hr />
        <Footer />
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <p className="text-center">2019 Jaxcoder</p>
      </div>
    )
  }
}

export default App