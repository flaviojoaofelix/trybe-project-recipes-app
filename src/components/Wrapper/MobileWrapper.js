import React from 'react';
import PropTypes from 'prop-types';

const MobileWrapper = ({ children }) => {
  const mainDivStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000',
  };

  const mobileDivStyle = {
    width: '360px',
    height: '640px',
    overflow: 'auto',
    backgroundColor: '#fff',
    border: '10px',
    borderColor: 'yellow',
  };

  return (
    <div style={ mainDivStyles }>
      <div style={ mobileDivStyle }>
        {children}
      </div>
    </div>
  );
};

MobileWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileWrapper;
