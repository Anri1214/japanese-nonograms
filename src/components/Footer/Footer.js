import React, { Component } from 'react';
import './Footer.scss';

/**
 * Class representing a Footer component.
 */
class Footer extends Component {
  /**
   * Render component.
   * @return {XML}
   */
  render () {
    return (
      <footer className="jn-footer">
        <div className="jn-copyright">
          <i className="fas fa-copyright" />
          Created by Anri1214
        </div>
      </footer>
    );
  }
}

export default Footer;
