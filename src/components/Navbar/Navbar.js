import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import './Navbar.scss';

/**
 * Class representing a Navbar component.
 */
class Navbar extends Component {
  /**
   * Initialize the component.
   * @param {Object} props - Component properties.
   */
  constructor (props) {
    super(props);
    this.config = [
      { link: '/game', icon: 'gamepad', title: 'Game' },
      { link: '/help', icon: 'question', title: 'Help' },
      { link: '/about', icon: 'info', title: 'About' },
    ];
  }

  /**
   * Render component.
   * @return {XML}
   */
  render () {
    return (
      <header className="jn-header">
        <nav className="jn-navigator">
          <div className="jn-navigator__action" />
          <div className="jn-navigator__title">
            <Link to="/game" className="jn-navigator__title--item">
              <i className="fab fa-zhihu" />
              Japanese Nonograms
            </Link>
          </div>
          <div className="jn-navigator__link">
            {
              _.map(this.config, (item, key) => {
                return (
                  <Link
                    key={ key }
                    to={ item.link }
                    title={ item.title }
                    className={
                      `jn-navigator__link--item
                      ${ item.link === this.props.path && 'jn-navigator__link--active' }`
                    }
                  >
                    <i className={ `fas fa-${ item.icon }` } />
                    <span className="jn-navigator__link--title">{ item.title }</span>
                  </Link>
                );
              })
            }
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
