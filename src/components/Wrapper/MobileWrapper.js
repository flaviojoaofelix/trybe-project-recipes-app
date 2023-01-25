import React from 'react';
import PropTypes from 'prop-types';

const MobileWrapper = ({ children }) => {
  const mainDivStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  };

  const mobileDivStyle = {
    width: '360px',
    height: '640px',
  };

  return (
    <div id="main" style={ mainDivStyles }>
      <div id="mobile" style={ mobileDivStyle }>
        {children}
      </div>
    </div>
  );
};

MobileWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileWrapper;
