import { connect } from 'react-redux';
import { setSettings } from '../../store/reducers/rootReducer';
import Settings from './Settings';

/**
 * @const {Object} mapDispatchToProps - Redux action creator.
 */
const mapDispatchToProps = {
  setSettings
};

/**
 * @function subscribe to Redux store updates.
 * @param {Object} router - Router reducer state.
 */
const mapStateToProps = ({ router }) => ({
  path: router.location.pathname
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
