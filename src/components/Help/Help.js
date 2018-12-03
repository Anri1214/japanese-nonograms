import React, { Component } from 'react';
import './Help.scss';

/**
 * Class representing a Help component.
 */
class Help extends Component {
  /**
   * Render component.
   * @return {XML}
   */
  render () {
    return (
      <section className="jn-container jn-help">
        <p className="jn-help__info">
          <span className="jn-help__info--paragraph" />
          To solve the nonogram you need to fill in all the
          squares of the grid either black or white.
          To work out which of the squares are black,
          you need to examine the clue strings given for each row and each column.
          The clue numbers inform how many consecutive black squares there are.
          For example, if the clue numbers are 2,1,4 it means there are 2 black squares
          followed by at least one white square, then 1 black square,
          then at least one white square then 4 black squares.
          Any remaining squares will be white.
        </p>
      </section>
    );
  }
}

export default Help;
