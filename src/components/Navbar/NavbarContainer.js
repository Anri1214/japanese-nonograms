import { connect } from 'react-redux';
import Navbar from './Navbar';

/**
 * @function subscribe to Redux store updates.
 * @param {Object} router - Router reducer state.
 */
const mapStateToProps = ({ router }) => ({
  path: router.location.pathname
});

export default connect(mapStateToProps)(Navbar);
