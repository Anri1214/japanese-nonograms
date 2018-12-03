import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

/**
 * Class representing a About component.
 */
class About extends Component {
  /**
   * Render component.
   * @return {XML}
   */
  render () {
    return (
      <section className="jn-container jn-about">
        <p className="jn-about__info">
          This game is created by Anri1214.<br />
          The main idea of the game is to solve a Japanese nonogram.<br />
          For details how to solve puzzle go to the {' '}
          <Link to="/help" className="jn-about__info--link">Help</Link>
          {' '} page.
        </p>
      </section>
    );
  }
}

export default About;
