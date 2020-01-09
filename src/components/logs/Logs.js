import React, { useEffect } from 'react';
import LogItem from './LogItem'
import Loader from '../layout/Loader'
import { connect } from 'react-redux'
import { getLogs } from '../../actions/logActions'
import PropTypes from 'prop-types';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs()
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs !== null ? (logs.length !== 0 ? logs.map(log => <LogItem key={log.id} log={log} />) : <p className="center">"There is no logs"</p>) : <Loader />}
      </ul>

    </div>
  );
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  log: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs);