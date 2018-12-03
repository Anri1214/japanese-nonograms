import { connect } from 'react-redux';
import Message from './Message';

/**
 * @function subscribe to Redux store updates.
 * @param {Object} router - Router reducer state.
 * @param {Object} rootReducer - Root reducer state.
 */
const mapStateToProps = ({ router, rootReducer }) => ({
  message: rootReducer.message,
  path: router.location.pathname
});

export default connect(mapStateToProps)(Message);
