import React, { Component } from 'react';
import * as _ from 'lodash';
import './Settings.scss';

/**
 * Class representing a Settings component.
 */
class Settings extends Component {
  /**
   * Initialize the component.
   * @param {Object} props - Component properties.
   */
  constructor (props) {
    super(props);
    this.state = {
      active: ''
    };
    this.config = {
      cat: {
        data: [
          [0, 0 ,1, 0, 1, 0, 0, 0, 0, 0],
          [0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
          [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          [1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
          [0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
          [0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
          [1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
          [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 1, 1, 0, 1, 1, 1, 1, 0, 0]
        ],
        cols: [],
        rows: [],
        title: '10x10',
        width: 0
      },
      elk: {
        data: [
          [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
          [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
          [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
          [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
          [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
          [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
          [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
        ],
        cols: [],
        rows: [],
        title: '15x15',
        width: 0
      },
      dino: {
        data: [
          [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
          [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
          [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
          [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
          [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0]
        ],
        cols: [],
        rows: [],
        title: '20x20',
        width: 0
      }
    };
  }

  /**
   * Run after component is mounted.
   */
  componentDidMount () {
    this.generate();
    this.selectGame ('cat');
  }

  /**
   * Calculate total true value in row
   * @param {Array} row - Nonogram row.
   * @return {Array}
   */
  calc (row) {
    let calc = 0;

    return row.reduce((res, val, index) => {
      if (val === 0) {
        calc && res.push(calc);
        calc = 0;
      } else {
        calc++;
        index === row.length - 1 && res.push(calc);
      }

      return res;
    }, []);
  }

  /**
   * Generate column and row rules.
   */
  generate () {
    _.forEach(this.config, item => {
      const rotate = this.rotate(item.data);

      item.data.forEach((row, index) => {
        item.cols[index] = this.calc(rotate[index]);
        item.rows[index] = this.calc(row);
      });

      item.width = _.last(
        _.sortBy(item.rows, item => item.length)
      ).length;
    });
  }

  /**
   * Get start game field by parameters.
   * @param {Array} data - Current game data.
   * @return {Array}
   */
  getGame (data) {
    data = _.cloneDeep(data);

    return _.map(data, row => {
      return _.map(row, (val, key) => row[key] = 0);
    });
  }

  /**
   * Rotate matrix.
   * @param {Array} data - Input matrix.
   * @return {Array}
   */
  rotate (data) {
    return _.keys(data).map(index => {
      return data.map(row => row[index]);
    });
  }

  /**
   * Select active game.
   * @param {String} name - Game name.
   */
  selectGame (name) {
    const config = this.config[name];

    this.props.setSettings(
      this.getGame(config.data),
      config
    );
    this.setState({
      active: name
    });
  }

  /**
   * Render component.
   * @return {XML}
   */
  render () {
    return (
      <section className="jn-settings">
        {
          this.props.path.includes('game') && _.map(this.config, (val, key) => {
            return (
              <button
                key={ key }
                onClick={ () => this.selectGame(key) }
                className={`
                  jn-settings__item
                  ${ key === this.state.active && 'jn-settings__item--active' }
                `}
              >
                { val.title }
              </button>
            );
          })
        }
      </section>
    );
  }
}

export default Settings;
