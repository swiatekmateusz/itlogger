import React from 'react';

const Loader = () => {
  return (

    <div className="progress" style={{ margin: '2rem auto', width: '70%' }}>
      <div className="indeterminate"></div>
    </div>);
}

export default Loader;