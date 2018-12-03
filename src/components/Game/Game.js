import React, { Component } from 'react';
import * as _ from 'lodash';
import './Game.scss';

/**
 * Class representing a Game component.
 */
class Game extends Component {
  /**
   * Initialize the component.
   * @param {Object} props - Component properties.
   */
  constructor (props) {
    super(props);
    this.message = {
      type: {
        complete: 'complete',
        error: 'error'
      },
      val: ''
    };
  }

  /**
   * Validate and update game data fields.
   * @param {Array} data - Current game data.
   */
  checkGame (data) {
    const clear = [];
    const msg = this.message;
    const template = this.props.settings.data;

    msg.val = '';

    _.forEach(data, (row, index) => {
      clear[index] = _.cloneDeep(row);

      if (msg.val !== msg.type.error) {
        _.forEach(row, (val, key) => {
          const match = template[index][key];

          clear[index][key] = val < 0 ? 0 : val;

          if (val > 0 && match !== val || val < 0 && match === 1) {
            msg.val = msg.type.error;

            return false;
          }
        });
      }
    });

    msg.val = _.isEqual(template, clear) ? msg.type.complete : msg.val;
    this.props.setGame(data, msg.val);
  }

  /**
   * Check line in nonogram field.
   * @param {int} index - Nonogram field index.
   * @return {boolean}
   */
  isLine (index) {
    return (index + 1) % 5 === 0 && index !== this.props.game.length - 1;
  }

  /**
   * Mouse button click on nonogram field.
   * @param {Event} event - Mouse right button click event.
   * @param {int} row - Game data row index.
   * @param {int} col - Game data col index.
   */
  onClick (event, row, col) {
    const data = _.cloneDeep(this.props.game);
    const val = data[row][col];

    switch (event.type) {
      case 'click':
        data[row][col] = val === 1 ? 0 : 1;
        break;
      case 'contextmenu':
        event.preventDefault();
        data[row][col] = val > -1 ? -1 : 0;
        break;
    }

    this.checkGame(data);
  }

  /**
   * Render component.
   * @return {XML}
   */
  render () {
    const { game, settings } = this.props;

    return (
      <section className="jn-container jn-game">
        {
          settings.data ? <table className="jn-game-table">
            <tbody className="jn-game-table__body">
              <tr>
                <td
                  className={
                    `jn-game-table__data
                    jn-game-table__data--bottom
                    jn-game-table__data--right`
                  }
                />
                {
                  _.map(settings.cols, (row, index) => {
                    return (
                      <td
                        key={ index }
                        className={
                          `jn-game-table__data
                          jn-game-table__data--col
                          jn-game-table__data--bottom
                          ${ this.isLine(index) && 'jn-game-table__data--right' }`
                        }
                      >
                        {
                          _.map(row, (val, key) => {
                            return (
                              <span
                                key={ key }
                                className="jn-game-table__data--bottom-val"
                              >
                                { val }<br/>
                              </span>
                            );
                          })
                        }
                      </td>
                    );
                  })
                }
              </tr>
              {
                _.map(game, (row, index) => {
                  return (
                    <tr key={ index }>
                      <td
                        style={{ minWidth: `${ settings.width * 17 }px` }}
                        className={
                          `jn-game-table__data
                          jn-game-table__data--row
                          jn-game-table__data--right
                          ${ this.isLine(index) && 'jn-game-table__data--bottom' }`
                        }
                      >
                        {
                          _.map(settings.rows[index], (val, key) => {
                            return (
                              <span
                                key={ key }
                                className="jn-game-table__data--right-val"
                              >
                                { val }
                              </span>
                            );
                          })
                        }
                      </td>
                      {
                        _.map(row, (val, key) => {
                          return (
                            <td
                              key={ key }
                              onClick={ event => this.onClick(event, index, key) }
                              onContextMenu={ event => this.onClick(event, index, key) }
                              className={
                                `jn-game-table__data
                                jn-game-table__data--nonogram
                                jn-game-table__data--nonogram-${ val > 0 ? 'black' : 'white' }
                                ${ this.isLine(index) && 'jn-game-table__data--bottom' }
                                ${ this.isLine(key) && 'jn-game-table__data--right' }`
                              }
                            >
                              { val === -1 ? 'X' : '' }
                            </td>
                          );
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table> : null
        }
      </section>
    );
  }
}

export default Game;
