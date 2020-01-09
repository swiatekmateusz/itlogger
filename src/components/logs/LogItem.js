import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions'

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id)
  }

  return (
    <li className='collection-item'>
      <div>
        <a
          onClick={() => setCurrent(log)}
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
            }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <span className='black-text'>{log.date}</span>
        </span>
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrent })(LogItem);