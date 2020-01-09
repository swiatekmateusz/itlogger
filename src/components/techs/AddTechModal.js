import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize';
import { connect } from 'react-redux'
import { addTech } from '../../actions/techActions'
import PropTypes from 'prop-types';


const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = () => {

    if (firstName === '' || lastName === '') {
      M.toast({ html: "Please enter all fields" })
    } else {
      addTech({ firstName, lastName })
      setFirstName('')
      setLastName('')
    }

  }

  return (
    <div id="tech-add-modal" className="modal" style={{ width: '75%', height: '75%' }}>
      <div className="modal-content">
        <h4>Enter Tech</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <label htmlFor="message" className='active'>First name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={lastName} onChange={e => setLastName(e.target.value)} />
            <label htmlFor="message" className='active'>Last name</label>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat">Enter</a>
        </div>
      </div>
    </div>
  );
}

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal);