import React, { Component } from 'react';
import './Message.scss';

/**
 * Class representing a Message component.
 */
class Message extends Component {
  /**
   * Initialize the component.
   * @param {Object} props - Component properties.
   */
  constructor (props) {
    super(props);
    this.type = {
      complete: 'YOU COMPLETED THE NONOGRAM VERY WELL!!!',
      error: 'You decide the nonogram is not correct.'
    };
  }

  /**
   * Render component.
   * @return {XML}
   */
  render () {
    const { message, path } = this.props;

    return (
      <section className="jn-message">
        <h2
          className={
            `jn-message__title
            jn-message__title--${message}`
          }
        >
          { path.includes('game') && this.type[message] }
        </h2>
      </section>
    );
  }
}

export default Message;
