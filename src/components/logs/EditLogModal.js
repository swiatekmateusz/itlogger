import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize';
import { connect } from 'react-redux'
import { updateLog } from '../../actions/logActions'
import TechSelect from '../techs/TechSelect'
import PropTypes from 'prop-types';

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  useEffect(() => {
    if (current) {
      setMessage(current.message)
      setAttention(current.attention)
      setTech(current.tech)
    }
    // eslint-disable-next-line
  }, [current]);

  const onSubmit = () => {
    const log = { id: current.id, message, attention, tech, date: Date(Date.now()) }

    if (message === '' || tech === '') {
      M.toast({ html: "Please enter all fields" })
    } else {
      updateLog(log)
      setMessage('')
      setAttention(false)
      setTech('')
    }

  }

  return (
    <div id="edit-log-modal" className="modal" style={{ width: '75%', height: '75%' }}>
      <div className="modal-content">
        <h4>Edit System Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
              <option value="" disabled> Select technican</option>
              <TechSelect />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <label>
              <input type="checkbox" name="attention" value={attention} checked={attention} onChange={e => setAttention(!attention)} className="filled-in" />
              <span>Needs Attention</span>
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat">Enter</a>
        </div>
      </div>

    </div>
  );
}

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  current: state.log.current
})

export default connect(mapStateToProps, { updateLog })(EditLogModal);