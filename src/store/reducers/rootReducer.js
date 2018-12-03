const SET_GAME = 'SET_GAME';
const SET_SETTINGS = 'SET_SETTINGS';

/**
 * @function update current game data.
 * @param {Array} game - Current game data.
 * @param {String} message - Game state message.
 * @return {Object}
 */
export const setGame = (game, message) => {
  return {
    type: SET_GAME,
    payload: {
      game: game,
      message: message
    }
  };
};

/**
 * @function update current game settings.
 * @param {Object} game - Current game data.
 * @param {Object} settings - Current game settings.
 * @return {Object}
 */
export const setSettings = (game, settings) => {
  return {
    type: SET_SETTINGS,
    payload: {
      game: game,
      settings: settings
    }
  };
};

/**
 * @const {Object} initialState - Default state parameters.
 */
const initialState = {
  game: [],
  message: '',
  settings: {}
};

/**
 * @function update reducer initial state.
 * @param {Object} state - Current game state.
 * @param {Object} action - Reducer action.
 * @return {Object}
 */
export default (state = initialState, action) => {
  const params = action.payload;

  switch (action.type) {
    case SET_GAME:
      return {
        ...state,
        game: params.game,
        message: params.message,
      };
    case SET_SETTINGS:
      return {
        ...state,
        game: params.game,
        settings: params.settings
      };
    default:
      return state;
  }
};
