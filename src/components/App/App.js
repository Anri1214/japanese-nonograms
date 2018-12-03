import React, { Component } from 'react';
import Navbar from '../Navbar';
import Main from '../Main';
import Footer from '../Footer';
import './App.scss';

/**
 * Class representing a App component.
 */
class App extends Component {
  /**
   * Render component.
   * @return {XML}
   */
  render () {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
