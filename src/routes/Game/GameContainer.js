import { connect } from 'react-redux';
import { setGame, setMessage } from '../../store/reducers/rootReducer';
import Game from '../../components/Game';

/**
 * @const {Object} mapDispatchToProps - Redux action creator.
 */
const mapDispatchToProps = {
  setGame,
  setMessage
};

/**
 * @function subscribe to Redux store updates.
 * @param {Object} rootReducer - Root reducer state.
 */
const mapStateToProps = ({ rootReducer }) => ({
  game: rootReducer.game,
  settings: rootReducer.settings
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
