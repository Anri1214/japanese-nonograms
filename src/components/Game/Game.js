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

    this.state = {
      game: props.game,
      prevProsGame: props.game
    };

    this.activeFillType = null;

    this.checkGame = this.checkGame.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.lazyCheckGame = _.debounce(this.checkGame, 1000);
  }

  componentDidMount () {
    document.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount () {
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  static getDerivedStateFromProps (props, state) {
    if (props.game !== state.prevProsGame) {
      return {
        game: props.game,
        prevProsGame: props.game
      };
    }
    return null;
  }

  /**
   * Validate and update game data fields.
   * @param {Array} data - Current game data.
   */
  checkGame () {
    const template = Object.entries(this.props.settings.data);
    const check = Object.entries(this.state.game).filter(entry => entry[1] === 1);

    if (_.isEqual(template, check)) {
      this.props.setMessage('complete');
    }
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

  onMouseDown (event) {
    if (event.target.id) {
      const [row, col] = event.target.id.split('_');
      const value = this.state.game[`${row}_${col}`];

      switch (event.buttons) {
        case 1:
          this.activeFillType = value === 1 ? 0 : 1;
          break;
        case 2:
          this.activeFillType = value > -1 ? -1 : 0;
          break;
        default:
          break;
      }

      if (this.activeFillType !== null) {
        this.updateGame(row, col);
      }
    }
  }

  onMouseOver (event) {
    if (event.target.id && this.activeFillType !== null) {
      const [row, col] = event.target.id.split('_');

      this.updateGame(row, col);
    }
  }

  onMouseUp () {
    this.activeFillType = null;
    this.props.setGame(this.state.game);
    this.lazyCheckGame();
  }

  updateGame (row, col) {
    if (this.state.game[`${row}_${col}`] !== this.activeFillType) {
      this.setState(prevState => ({
        game: {
          ...prevState.game,
          [`${row}_${col}`]: this.activeFillType
        }
      }));
    }
  }

  /**
   * Render component.
   * @return {XML}
   */
  render () {
    const { game } = this.state;
    const { settings } = this.props;

    return (
      <section className="jn-container jn-game">
        {
          settings.data ? <table className="jn-game-table">
            <tbody
              onMouseDown={this.onMouseDown}
              className="jn-game-table__body"
              onContextMenu={e => e.preventDefault()}
            >
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
                [...Array(settings.sizeX)].map((i, row) => {
                  return (
                    <tr key={row}>
                      <td
                        style={{ minWidth: settings.width * 17 }}
                        className={
                          `jn-game-table__data
                          jn-game-table__data--row
                          jn-game-table__data--right
                          ${ this.isLine(row) && 'jn-game-table__data--bottom' }`
                        }
                      >
                        {
                          _.map(settings.rows[row], (val, key) => {
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
                        [...Array(settings.sizeY)].map((i, col) => {
                          return (
                            <td
                              key={col}
                              id={`${row}_${col}`}
                              onMouseOver={event => this.onMouseOver(event, row, col)}
                              className={
                                `jn-game-table__data
                                jn-game-table__data--nonogram
                                jn-game-table__data--nonogram-${
                                  game[`${row}_${col}`] > 0
                                    ? 'black'
                                    : 'white'
                                  }
                                ${this.isLine(row) && 'jn-game-table__data--bottom'}
                                ${this.isLine(col) && 'jn-game-table__data--right'}`
                              }
                            >
                              {game[`${row}_${col}`] ? 'X' : ''}
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
