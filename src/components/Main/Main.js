import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../../routes/About';
import Game from '../../routes/Game';
import Help from '../../routes/Help';
import Message from '../Message';
import Settings from '../Settings';
import './Main.scss';

/**
 * Class representing a Main component.
 */
class Main extends Component {
  /**
   * Render component.
   * @return {XML}
   */
  render () {
    const path = process.env.NODE_ENV === 'development' ? '/' : '../';
    
    return (
      <main className="jn-main">
        <div className="jn-content">
          <Settings />
          <div
            className="jn-container"
            style={{
              background: `url(${ path }wallpaper.jpg)`
            }}
          >
            <Switch>
              <Route exact path="/" render={ () => <Redirect to="/game" /> }/>
              <Route exact path="/about" component={ About } />
              <Route exact path="/help" component={ Help } />
              <Route exact path="/game" component={ Game } />
            </Switch>
          </div>
          <Message />
        </div>
      </main>
    );
  }
}

export default Main;
