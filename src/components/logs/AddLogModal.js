import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize';
import { connect } from 'react-redux'
import { addLog } from '../../actions/logActions'
import TechSelect from '../techs/TechSelect'
import PropTypes from 'prop-types';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const onSubmit = () => {
    const log = { message, attention, tech, date: Date(Date.now()) }

    if (message === '' || tech === '') {
      M.toast({ html: "Please enter all fields" })
    }
    addLog(log)
    setMessage('')
    setAttention(false)
    setTech('')
  }

  return (
    <div id="add-log-modal" className="modal" style={{ width: '75%', height: '75%' }}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
            <label htmlFor="message" className='active'>Log Message</label>
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
              <input type="checkbox" name="attention" value={attention} onChange={e => setAttention(!attention)} className="filled-in" />
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
}

export default connect(null, { addLog })(AddLogModal);