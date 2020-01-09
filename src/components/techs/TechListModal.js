import React, { useEffect } from 'react';
import TechItem from './TechItem'
import Loader from '../layout/Loader'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techActions'
import PropTypes from 'prop-types';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {


  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4 className='center'>Technicans</h4>
        <ul className='collection'>
          {!loading ? (techs && techs.length !== 0 ? techs.map(tech => <TechItem key={tech.id} tech={tech} />) : <p className="center">There is no techs</p>) : <Loader />}
        </ul>
      </div>
    </div>
  );
}
TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal);